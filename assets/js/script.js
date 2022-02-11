//things to do
//01 - display icon
//02 - change code - make copy of this one that I know works - 
// 03 - make a fetch call for city name - return lat and long
// 04 - send lat and long to another fetch that will bring uv index, and 7 days of forecast - maybe even change parameters to 5 days
// 05 - create 5 dinamic cards that will display weather for 5 days
// 05 - save local storage

var formEl = document.querySelector("#city-form");
var searchInput = document.querySelector("#city-input");
var weatherContainerEl = document.querySelector("#current-weather-container");
var currentcityname = document.querySelector("#current-city-name")
var searchButtonEl = document.querySelector("#search-button");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windspeed = document.querySelector("#wind-speed");
var uvindex = document.querySelector("#uv-index");
var locationIcon = document.querySelector(".weather-icon");
var currentDate = document.querySelector("#currentDate");
var currentIcon = document.querySelector("#currentIcon");

// Global variables
// displaying current date
const date = moment().format("MMMM Do YYYY");
var searchInput = $("#city-input").val();


var getCurrentWeather = function () {
    event.preventDefault();

    var ApiKey = 'ee601a5be4293bbbbc2b2665840ba595';
    var searchInput = $("#city-input").val();

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + ApiKey + "&units=imperial";


    fetch(apiUrl)

        .then(function (response) {
            console.log(response);
            response.json().then(function (data) {
                // store lat and long
                lat = data.coord.lat;
                lon = data.coord.lon;
                displayCurrentweather();
                return lat + lon + searchInput;

            });
        
        });

}

var displayCurrentweather = function () {
    
    //weather main
    var ApiKey = 'ee601a5be4293bbbbc2b2665840ba595';
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?+lat=" + lat + "&long=" + lon + "&Appid=" + ApiKey +  "&exclude=hourly&units=imperial" ;


    // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}
    // https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid=ee601a5be4293bbbbc2b2665840ba595&appid=ee601a5be4293bbbbc2b2665840ba595
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid=ee601a5be4293bbbbc2b2665840ba595


    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {
                // store lat and long
                lat = data.coord.lat;
                lon = data.coord.lon;
                displayCurrentweather();
                return lat + lon + searchInput;
               
            });
        });

}


formEl.addEventListener('submit', getCurrentWeather);
searchButtonEl.addEventListener("click", getCurrentWeather);
formEl.addEventListener('submit', displayCurrentweather);
searchButtonEl.addEventListener("click", displayCurrentweather);

// var getFivedaysWeather = function () {
