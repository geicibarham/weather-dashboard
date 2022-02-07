var formEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city-input");





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

    var ApiKey = "ee601a5be4293bbbbc2b2665840ba5952";
    
    var apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={ApiKey}`;
console.log(apiUrl);
   
fetch(apiUrl)
        .then(function (response) {
            // console.log(response);
        });
}


getCurrentWeather();





// var getFivedaysWeather = function () {


