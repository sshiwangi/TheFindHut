const search_explore_btn = document.querySelector(".search-explore");
search_explore_btn.addEventListener("click", function () {
  const selected_location = document.getElementById("city").value;
  const selected_propertytype_value = 
    document.getElementById("propertytype").value;
    console.log(selected_location);
    console.log(selected_propertytype_value);
    // fetch(`/addproperty.hbs/selected_propertytype_value/selected_location`)
  fetch(`/addproperty.hbs`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((ele) => {
        const property_item_container = document.createElement("div");
        property_item_container.classList.add("items-hostels");

        const property_item_image_container = document.createElement("div");
        property_item_image_container.classList.add("items-image-hostels");

        const property_item_details_container = document.createElement("div");
        property_item_details_container.classList.add("items-details-hostels");

        const property_name_container = document.createElement("p");
        property_name_container.innerText = element.name;
        const property_location_container = document.createElement("p");
        property_location_container.innerText = element.location;

        property_item_details_container.append(property_name_container);
        property_item_details_container.append(property_location_container);

        const property_item_btn_container = document.createElement("div");
        property_item_btn_container.classList.add("btn-container-hostels");

        const view_hostels_container = document.createElement("div");
        view_hostels_container.classList.add("view-details-btn-hostels");
        view_hostels_container.innerText = "View Details";

        property_item_btn_container.append(view_hostels_container);

        property_item_container.append(property_item_image_container);
        property_item_container.append(property_item_details_container);
        property_item_container.append(property_item_btn_container);

        items_container_hostels.append(property_item_container);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
