const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const hbs = require("hbs");
const app = express();

// connecting to mongodb atlas
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    uuseUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://thefabcoders:I5zlRssCvZ6uwVc0@cluster0.ynaozwh.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});
database();

// require("./db/conn");

const users = require("./src/models/users");
const propertydetails = require("./src/models/addproperty");

const { json } = require("express");
const { CLIENT_RENEG_LIMIT } = require("tls");
const port = process.env.PORT || 8000;

//public static path
const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));

//routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/signup.hbs", (req, res) => {
  res.render("signup");
});
app.get("/login.hbs", (req, res) => {
  res.render("login");
});
app.get("/home.hbs", (req, res) => {
  res.render("home");
});
app.get("/hostels.hbs", (req, res) => {
  res.render("hostels");
});
app.get("/pg.hbs", (req, res) => {
  res.render("pg");
});
app.get("/apartment.hbs", (req, res) => {
  res.render("apartment");
});

app.get("/addproperty.hbs", (req, res) => {
  res.render("addproperty");
});

app.get("/propertydetails.hbs", (req, res) => {
  res.render("propertydetails");
});
app.get("/profilepage.hbs", (req, res) => {
  res.render("profilepage");
});
//sign up
app.post("/signup.hbs", async (req, res) => {
  try {
    const Password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    if (Password === confirmpassword) {
      const usersignupdata = new users({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: Password,
        confirmpassword: confirmpassword,
      });

      const registered = await usersignupdata.save();
      res.status(201).render("home");
    } else {
      res.send("passwords are not matching");
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//login

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email; //getting user's email
    const password = req.body.password; // getting user's password from the form

    const useremail = await users.findOne({ email: email });

    const isMatch = await bcrypt.compare(password, useremail.password);

    if (isMatch) {
      // if password in the database and password entered by the user matched
      res.status(201).render("home");
    } else {
      res.send("invalid login details");
    }
  } catch (error) {
    res.status(400).send("Invalid login details");
  }
});

//Sellers Property Details
app.post("/addproperty.hbs", async (req, res) => {
  try {
    // const selectedPropertyType = req.body.propertytype;
    // console.log(selectedPropertyType);
    const sellerspropertydetails = new propertydetails({
      location: req.body.location,
      name: req.body.name,
      propertytype: req.body.propertytype,
      gender: req.body.gender,
      roomtype: req.body.roomtype,
      budget: req.body.budget,
      wifi: req.body.wifi,
      laundary: req.body.laundary,
    });
    const sellerpropertydetail = await sellerspropertydetails.save();
    // console.log({selectedPropertyType})
    // if (selectedPropertyType === "pg") {
    //   res.status(201).render("pg");
    // } else if (selectedPropertyType === "hostel") {
    //   res.status(201).render("hostels");
    // } else {
    //   res.status(201).render("apartment");
    // }
    res.status(201).render("home");
  } catch (error) {
    console.log(error);
    res.status(400).send("Sorry! couldn't add your property");
  }
});

app.get("/addproperty.hbs/:propertytype", async (req, res) => {
    // const location = req.params.location;
    const propertytype = req.params.propertytype;
    console.log(req.params.propertytype);
    propertydetails.find({ propertytype},  (error, item) => {
      if (error) {
        res.status(500).send(error);
      } else if (!item) {
        res
          .status(404)
          .send({ message: "Email does not exist or write the email properly" });
      } else {
        res.status(200).send(item);
      }
    });
  });
        
        // {console.log("blah"+req.user._id)}


// let countries = require('country-state-city').Country;
// let State = require('country-state-city').State;

// const states = State.getStatesOfCountry("IN");
// states.forEach(state => {
//     console.log(state.name);
// })

app.listen(port, () => {
  console.log(`listening to port at ${port}`);
});
