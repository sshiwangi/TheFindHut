const submit_btn = document.querySelector(".submit-btn-add-property");

submit_btn.addEventListener("click", function(e) {
    e.preventDefault();
})
// const items_container_pg = document.querySelector(".items-container-hostels");
// const location_container = document.querySelector('#location');
// const entered_location = location_container.value;

// const selected_propertytype_value = document.querySelector('#propertytype').value;
// console.log(entered_location);
// console.log(selected_propertytype_value);
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

