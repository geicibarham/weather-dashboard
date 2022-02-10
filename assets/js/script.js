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

//function to handle form submission
var formSubmitHandler = function (event) {
    //prevent browser from automatically refreshing


};


//create function to get the current weather on a specific city - fetch will be in here

var getCurrentWeather = function () {
    event.preventDefault();

    var ApiKey = 'ee601a5be4293bbbbc2b2665840ba595';
    var searchInput = $("#city-input").val();

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + ApiKey + "&units=imperial";


    fetch(apiUrl)
        .then(function (response) {
            response.json().then(function (data) {
               

                const date = moment().format("MMMM Do YYYY");
              
                
                //grab data and display
                // locationIcon.innerHTML = data.weather[0];
                // currentDate.innerHTML = date;
                currentDate.innerHTML = date;
                currentcityname.innerHTML = data.name;
                console.log(data.main);
                temperature.innerHTML = data.main.temp;
                humidity.innerHTML = data.main.humidity;
                windspeed.innerHTML = data.wind.speed;


                console.log(data.weather[0]);
                // uvindex

                //  let icon = $("<img>").addClass("rounded mx-auto d-block");
                // icon.attr("src", "http://openweathermap.org/img/wn/" + today.weather[0].icon + "@2x.png");

            });
        })

}

var displayCurrentweather = function () {
    //weather main

}


formEl.addEventListener('submit', getCurrentWeather);

searchButtonEl.addEventListener("click", getCurrentWeather);



// var getFivedaysWeather = function () {
