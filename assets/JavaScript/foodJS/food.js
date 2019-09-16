$(document).ready(function () {
    var queryString = new URLSearchParams(window.location.search);
    $("#city").val(queryString.get("city"));
    $("#food-type").val(queryString.get("foodType"));
    loadRestaurants();
});


$("#search").on("click", function (event) {
    event.preventDefault();
    loadRestaurants();
});

function loadRestaurants() {
    var city = $("#city").val();
    var foodType = $("#food-type").val();
    var zipCode = $(".zipCode").val();
    console.log(city + foodType + zipCode);
    $.ajax({
        url: `https://developers.zomato.com/api/v2.1/search?q=${foodType}%2B${city}&radius=${zipCode}&user-key=74b8c51009067028679f28e79ef8dbd2`,
        method: "GET",
        headers: { 'user-key': '74b8c51009067028679f28e79ef8dbd2' }
    }).then(function (response) {
        var responseToArray = Object.values(response);
        var restaurants = responseToArray[3];
        var restaurantsList = $("#foodBottomGrid");
        restaurantsList.html("");
        $("#city").val("");
        $("#food-type").val("");
        for (let i = 0; i < restaurants.length; i++) {
            var restaurante = restaurants[i];
            restaurantsList.append(
                `<div class="card restCards">` +
                `<div class="card-body">` +
                `<h6 class="rating" id="restRating">${restaurante.restaurant.user_rating.aggregate_rating}</h6>` +
                `<h5 class="card-title" id="restName">${restaurante.restaurant.name}</h5>` +
                `<h6 class="votes text-muted">${restaurante.restaurant.user_rating.votes} votes</h6>` +
                `<h6 class="card-subtitle" id="cityName">${restaurante.restaurant.location.locality}</h6>` +
                `<p class="card-text text-muted" id ="fullAddress">${restaurante.restaurant.location.address}</p>` +
                `<hr>` +
                `<p class="text-muted" id="cuisene">Cuisines: ${restaurante.restaurant.cuisines}</p>` +
                `<p class="text-muted" id="costForTwo">Cost for two: \$${restaurante.restaurant.average_cost_for_two}</p>` +
                `<hr>` +
                `<a href="${restaurante.restaurant.menu_url}" class="menuBtn"><button type="button" class="btn btn-outline-secondary">📝View Menu</button>
                </a>` +
                `</div>` +
                `</div>`);
            console.log(restaurante.restaurant.name + restaurante.restaurant.location.address + restaurante.restaurant.menu_url);
        }
    });
}










// WORKING CODE 
// $("#search").on("click", function (event) {
//     event.preventDefault();
//     var city = $("#city").val();
//     var foodType = $("#food-type").val();
//     var zipCode = $(".zipCode").val();
//     console.log(city + foodType + zipCode);
//     $.ajax({
//         url: `https://developers.zomato.com/api/v2.1/search?q=${foodType}%2B${city}&radius=${zipCode}&user-key=74b8c51009067028679f28e79ef8dbd2`,
//         method: "GET",
//         headers: { 'user-key': '74b8c51009067028679f28e79ef8dbd2' }
//     }).then(function (response) {
//         var responseToArray = Object.values(response);
//         var restaurants = responseToArray[3];
//         var restaurantsList = $("#foodBottomGrid");

//         for (let i = 0; i < restaurants.length; i++) {
//             var restaurante = restaurants[i];
//             restaurantsList.append(
//                 `<div class="card restCards">` +
//                 `<div class="card-body">` +
//                 `<h6 class="rating" id="restRating">${restaurante.restaurant.user_rating.aggregate_rating}</h6>` +
//                 `<h5 class="card-title" id="restName">${restaurante.restaurant.name}</h5>` +
//                 `<h6 class="votes text-muted">${restaurante.restaurant.user_rating.votes} votes</h6>` +
//                 `<h6 class="card-subtitle" id="cityName">${restaurante.restaurant.location.locality}</h6>` +
//                 `<p class="card-text text-muted" id ="fullAddress">${restaurante.restaurant.location.address}</p>` +
//                 `<hr>` +
//                 `<p class="text-muted" id="cuisene">Cuisines: ${restaurante.restaurant.cuisines}</p>` +
//                 `<p class="text-muted" id="costForTwo">Cost for two: \$${restaurante.restaurant.average_cost_for_two}</p>` +
//                 `<hr>` +
//                 `<a href="${restaurante.restaurant.menu_url}" class="menuBtn">📝View Menu</a>` +
//                 `</div>` +
//                 `</div>`);
//             console.log(restaurante.restaurant.name + restaurante.restaurant.location.address + restaurante.restaurant.menu_url);
//         }
//     });
// });


// my key 87fe459d127a7738e369dad3ccc1d9b0
//key 74b8c51009067028679f28e79ef8dbd2

// $("#search").on("click", function (event) {
//     console.log("onClick");
//     event.preventDefault();
//     var city = $("#city").val();
//     var foodType = $("#food-type").val();
//     var areaRadious = $("#area-range").val();
//     console.log($("#city").val() + foodType + areaRadious);
//     $.ajax({
//         url: `https://developers.zomato.com/api/v2.1/search?q=${foodType}%2B${city}&radius=${areaRadious}&user-key=74b8c51009067028679f28e79ef8dbd2`,
//         method: "GET",
//         headers: { 'user-key': '74b8c51009067028679f28e79ef8dbd2' }
//     }).then(function (response) {
//         var responseToArray = Object.values(response);
//         var restaurants = responseToArray[3];
//         var restaurantsList = $("#restaurants-list");

//         for (let i = 0; i < restaurants.length; i++) {
//             var restaurante = restaurants[i];
//             restaurantsList.append(`<tr scope = "row">
//                             <td >${restaurante.restaurant.name}</td>
//                             <td>${restaurante.restaurant.location.address}</td>
//                             <td><a href="${restaurante.restaurant.menu_url}">Check the Menu<a/></td>
//                           </tr>`);
//             console.log(restaurante.restaurant.name + restaurante.restaurant.location.address + restaurante.restaurant.menu_url);
//         }
//     });
// });