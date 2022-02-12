//things to do
//01 - display icon
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

// 5 days forecast - 
var dayOne = document.querySelector("#day1");
var dayOnetemperature = document.querySelector("#temperature1");
var dayOnehumidity = document.querySelector("#humidity1");

var dayTwo = document.querySelector("#day2");
var dayTwotemperature = document.querySelector("#temperature2");
var dayTwohumidity = document.querySelector("#humidity2");

var dayThree = document.querySelector("#day3");
var dayThreetemperature = document.querySelector("#temperature3");
var dayThreehumidity = document.querySelector("#humidity3");

var dayFour = document.querySelector("#day4");
var dayFourtemperature = document.querySelector("#temperature4");
var dayFourhumidity = document.querySelector("#humidity4");

var dayFive = document.querySelector("#day5");
var dayFivetemperature = document.querySelector("#temperature5");
var dayFivehumidity = document.querySelector("#humidity5");

var getCurrentWeather = function () {
    event.preventDefault();

    var ApiKey = 'ee601a5be4293bbbbc2b2665840ba595';
    var searchInput = $("#city-input").val();

    if (searchInput === "") {
        alert("Please enter a city name to get started!");
    }

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + ApiKey + "&units=imperial";


    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {

                // displaying current date
                const date = moment().format("MMMM Do YYYY");


                currentDate.innerHTML = date;
                currentcityname.innerHTML = data.name;
                temperature.innerHTML = data.main.temp + " " + "°F";
                humidity.innerHTML = data.main.humidity + " " + "%";
                windspeed.innerHTML = data.wind.speed + " " + "Mph";
                // console.log(data.weather[0]);
                // console.log(data.weather.icon);

                // get current lat and lon to get 5 days weather
                var currentLat = data.coord.lat;
                var currentLon = data.coord.lon;

                // have another fetch call for 5 days and uv index
                var fiveDaysWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLat}&lon=${currentLon}&exclude=minutely,hourly,alerts&units=imperial&appid=${ApiKey}`;

                fetch(fiveDaysWeatherURL)
                    .then(function (response) {
                        response.json().then(function (data) {
                            //   add current uv index
                            uvindex.innerHTML = data.current.uvi;

                            if (data.current.uvi <= 3) {

                                uvindex.style.backgroundColor = "green"

                            } else if (data.current.uvi <= 7) {

                                uvindex.style.backgroundColor = "orange"

                            } else if (data.current.uvi > 7) {

                                uvindex.style.backgroundColor = "red"
                            }


                            // display 5 days forecast







                        })
                    })



            });
        })

}
formEl.addEventListener('submit', getCurrentWeather);

searchButtonEl.addEventListener("click", getCurrentWeather);



// var getFivedaysWeather = function () {
