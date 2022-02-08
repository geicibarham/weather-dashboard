var formEl = document.querySelector("#city-form");
var weatherContainerEl = document.querySelector("#current-weather-container");
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
    

    var ApiKey = 'ee601a5be4293bbbbc2b2665840ba595';
    var searchInput = $("#city-input").value;

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + ApiKey + "&units=imperial";

    // https://api.openweathermap.org/data/2.5/weather?q=curitiba&appid=ee601a5be4293bbbbc2b2665840ba595&units=imperial
    // var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q' + cityInput.value + '&appid=ee601a5be4293bbbbc2b2665840ba595' + '&units=imperial';

    // var apiUrlat = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${ApiKey}`
    // `https://api.openweathermap.org/data/2.5/weather?q=durham&appid=${ApiKey}`

    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (response) {
                console.log(response);
            });
        })


}

// getCurrentWeather();

formEl.addEventListener('submit', getCurrentWeather);

searchButtonEl.addEventListener("click", getCurrentWeather);



// var getFivedaysWeather = function () {
