//things to do
//01 - display icon
// 05 - save local storage


var formEl = document.querySelector("#city-form");
var searchInput = document.querySelector("#city-input");
var currentcityname = document.querySelector("#current-city-name")
var searchButtonEl = document.querySelector("#search-button");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windspeed = document.querySelector("#wind-speed");
var uvindex = document.querySelector("#uv-index");
var currentDate = document.querySelector("#currentDate");


// 5 days forecast - 
var dateDayone = document.querySelector("#date1");
var dayOnetemperature = document.querySelector("#temperature1");
var dayOnetempmin = document.querySelector("#temperature1min");
var dayOnehumidity = document.querySelector("#humidity1");
var dayOnewindSpeed = document.querySelector("#wind-speed1");

var dateDaytwo = document.querySelector("#date2");
var dayTwotemperature = document.querySelector("#temperature2");
var dayTwotempmin = document.querySelector("#temperature2min");
var dayTwohumidity = document.querySelector("#humidity2");
var dayTwowindSpeed = document.querySelector("#wind-speed2");

var dateDaythree = document.querySelector("#date3");
var dayThreetemperature = document.querySelector("#temperature3");
var dayThreetempmin = document.querySelector("#temperature3min");
var dayThreehumidity = document.querySelector("#humidity3");
var dayThreewindSpeed = document.querySelector("#wind-speed3");

var dateDayfour = document.querySelector("#date4");
var dayFourtemperature = document.querySelector("#temperature4");
var dayFourtempmin = document.querySelector("#temperature4min");
var dayFourhumidity = document.querySelector("#humidity4");
var dayFourwindSpeed = document.querySelector("#wind-speed4");

var dateDayfive = document.querySelector("#date5");
var dayFivetemperature = document.querySelector("#temperature5");
var dayFivetempmin = document.querySelector("#temperature5min");
var dayFivehumidity = document.querySelector("#humidity5");
var dayFivewindSpeed = document.querySelector("#wind-speed5");


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
                const today = moment().format("MMMM Do YYYY");


                currentDate.innerHTML = today;
                currentcityname.innerHTML = data.name;
                temperature.innerHTML = data.main.temp + "°F";
                humidity.innerHTML = data.main.humidity + " " + "%";
                windspeed.innerHTML = data.wind.speed + " " + "Mph";


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

                            var travelTime1 = moment().add(1, 'day').format('M/D/YYYY');


                            // populate each day 

                            dateDayone.innerHTML = travelTime1;
                            dayOnetemperature.innerHTML = data.daily[1].temp.day + "°F";
                            dayOnetempmin.innerHTML = data.daily[1].temp.min + "°F";
                            dayOnehumidity.innerHTML = data.daily[1].humidity + "%";
                            dayOnewindSpeed.innerHTML = data.daily[1].wind_speed + " " + "Mph";


                            var travelTime2 = moment().add(2, 'day').format('M/D/YYYY');

                            dateDaytwo.innerHTML = travelTime2;
                            dayTwotemperature.innerHTML = data.daily[2].temp.day + "°F";
                            dayTwotempmin.innerHTML = data.daily[2].temp.min + "°F";
                            dayTwohumidity.innerHTML = data.daily[2].humidity + "%";
                            dayTwowindSpeed.innerHTML = data.daily[2].wind_speed + " " + "Mph";



                            var travelTime3 = moment().add(3, 'day').format('M/D/YYYY');

                            dateDaythree.innerHTML = travelTime3;
                            dayThreetemperature.innerHTML = data.daily[3].temp.day + "°F";
                            dayThreetempmin.innerHTML = data.daily[3].temp.min + "°F";
                            dayThreehumidity.innerHTML = data.daily[3].humidity + "%";
                            dayThreewindSpeed.innerHTML = data.daily[3].wind_speed + " " + "Mph";



                            var travelTime4 = moment().add(4, 'day').format('M/D/YYYY');

                            dateDayfour.innerHTML = travelTime4;
                            dayFourtemperature.innerHTML = data.daily[4].temp.day + "°F";
                            dayFourtempmin.innerHTML = data.daily[4].temp.min + "°F";
                            dayFourhumidity.innerHTML = data.daily[4].humidity + "%";
                            dayFourwindSpeed.innerHTML = data.daily[4].wind_speed + " " + "Mph";


                            var travelTime5 = moment().add(5, 'day').format('M/D/YYYY');

                            dateDayfive.innerHTML = travelTime5;
                            dayFivetemperature.innerHTML = data.daily[5].temp.day + "°F";
                            dayFivetempmin.innerHTML = data.daily[5].temp.min + "°F";
                            dayFivehumidity.innerHTML = data.daily[5].humidity + "%";
                            dayFivewindSpeed.innerHTML = data.daily[5].wind_speed + " " + "Mph";


                            //save to local storage
                            searchedCities = [];

                            var searchedCities = searchInput;
                            localStorage.setItem("city", searchedCities);
                            localStorage.getItem("city");

                            if (searchedCities < 8) {
                                searchedCities.forEach
                            }



                        })
                    })



            });
        })

}
formEl.addEventListener('submit', getCurrentWeather);

searchButtonEl.addEventListener("click", getCurrentWeather);
