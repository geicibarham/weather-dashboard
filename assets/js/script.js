var formEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-input");
var weatherContainerEl = document.querySelector("#current-weather-container");






//var for current date to display on page
var currentDate = moment().format('L');
$("#current-date").text("(" + currentDate + ")");


//function to handle form submission
var formSubmitHandler = function (event) {
    //prevent browser from automatically refreshing
    event.preventDefault();

    //get city from input element
}

//create function to get the current weather on a specific city - fetch will be in here

var getCurrentWeather = function () {

    var ApiKey = "ee601a5be4293bbbbc2b2665840ba595";

    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q={durham}&appid=${ApiKey}`

    var apiUrlat = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${ApiKey}`

  
    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (response) {
                console.log(response);
            });
        })



    }

    getCurrentWeather();

// var getFivedaysWeather = function () {
