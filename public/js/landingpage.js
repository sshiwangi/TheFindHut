document.addEventListener('DOMContentLoaded', () => {
    const country = document.querySelector('#country');

    // fetch('https://restcountries.com/v3.1/all').then(res => {
    //     return res.json();
    // }).then(data => {
       
        
    //     data.forEach(countries => {
    //         const options = document.createElement('option');
    //         options.text = countries.name.official;
    //         options.value = countries.name.official;
    //         country.append(options);
            
           
            
    //     });
            
    // }).catch(err => {
    //     console.log(err);
    // })

    

//     let Country = require('country-state-city').Country;
//     let State = require('country-state-city').State;
//     let City = require('country-state-city').City;

//     const allCities = State.getStatesOfCountry("IN");
    
//     allCities.forEach(city => {
//         const options = document.createElement('option');
//         options.text = city.name;
//         options.value = city.name;
//         country.append(options);
       
// })

//country

// fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json').then(response => response.json())
// .then(data => {
//     data.forEach((c) => {
        // const options = document.createElement('option');
        // options.text = c;
        // options.value = c;
        // country.append(options);
//         console.log(c);
//     });
// })

//state

// fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json').then(response => response.json())
// .then(data => {
//     data.forEach((s) => {
        // const options = document.createElement('option');
        // options.text = c;
        // options.value = c;
        // country.append(options);
//         console.log(getStatesOfCountry('IN'));
//     });
// })

//city
// fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json').then(response => response.json())
// .then(data => {
//     data.forEach((c) => {
        // const options = document.createElement('option');
        // options.text = c;
        // options.value = c;
        // country.append(options);
//         console.log(c.name);
//     });
// })
    
});
// import csc from 'country-state-city';
// console.log(State.getStatesOfCountry("IN"));

const question_item = document.getElementsByClassName('question-item');
var i;
for(i = 0; i< question_item.length; i++){
    question_item[i].addEventListener("click", function() {
        this.classList.toggle("active");
    

    const answer_item = this.nextElementSibling;
    if(answer_item.style.display === "block"){
        answer_item.style.display = "none";
    }
    else {
        answer_item.style.display = "block";
    }
});
}

// getting user's entered data in the search bar


// fetch(`/addproperty.hbs/:${entered_location}/:${selected_propertytype_value}`).then(res => {
//     return res.json();
// }).then((data) => {
//     data.forEach(element => {
//         console.log(element);
//     });
// }).catch((error) => {
//     console.log(error);
//     console.log("couldn't fetch data");
// })
// const search_btn = document.querySelector('.search');
// search_btn.addEventListener('onclick', function() {
//     location.href = 'http://localhost:8000/pg.hbs'
// })
// const selected_property_value = document.querySelector('#propertytype').value;
// const search_btn = document.querySelector('.search');
// const search_btn_link = document.querySelector('#search-link');

// search_btn.addEventListener("onclick", function() {
//     if(selected_property_value === "hostel"){
//         search_btn_link.href = "http://www.google.com";
//     }
//     else if(selected_property_value === "pg"){
//         location.href = "/pg.hbs";
//     }
//     else if(selected_property_value === "apartment"){
//         location.href = "/apartment.hbs";
//     }
// })


