var formEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-input");
var currentWeather = document.querySelector("#current-weather-container");
var searchButtonEl = document.querySelector("#search-button");






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

    var apiKey = "ee601a5be4293bbbbc2b2665840ba595";


    //this api returns latitude and longitute
    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q={durham}&limit={limit}&appid=${apiKey}`;


    fetch(apiUrl)
        .then(function (response) {
            //api that converts latitude and longitute into city name

            response.json().then(function (response) {
                console.log(response);
            });
        })



}

getCurrentWeather();

// var getFivedaysWeather = function () {

//add event listeners to execute function
// searchButtonEl.addEventListener('click', getCurrentWeather);