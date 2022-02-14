
var formEl = document.querySelector("#city-form");
var searchInput = document.querySelector("#city-input");
var currentcityname = document.querySelector("#current-city-name")
var searchButtonEl = document.querySelector("#search-button");
var temperature = document.querySelector("#temperature");
var humidity = document.querySelector("#humidity");
var windspeed = document.querySelector("#wind-speed");
var uvindex = document.querySelector("#uv-index");
var currentDate = document.querySelector("#currentDate");
var imgEl = document.querySelector("#weather-image");


// 5 days forecast - 
var dateDayone = document.querySelector("#date1");
var iconOneEl = document.querySelector("#weather-image1");
var dayOnetemperature = document.querySelector("#temperature1");
var dayOnetempmin = document.querySelector("#temperature1min");
var dayOnehumidity = document.querySelector("#humidity1");
var dayOnewindSpeed = document.querySelector("#wind-speed1");

var dateDaytwo = document.querySelector("#date2");
var iconTwoEl = document.querySelector("#weather-image2");
var dayTwotemperature = document.querySelector("#temperature2");
var dayTwotempmin = document.querySelector("#temperature2min");
var dayTwohumidity = document.querySelector("#humidity2");
var dayTwowindSpeed = document.querySelector("#wind-speed2");

var dateDaythree = document.querySelector("#date3");
var iconthreeEl = document.querySelector("#weather-image3");
var dayThreetemperature = document.querySelector("#temperature3");
var dayThreetempmin = document.querySelector("#temperature3min");
var dayThreehumidity = document.querySelector("#humidity3");
var dayThreewindSpeed = document.querySelector("#wind-speed3");

var dateDayfour = document.querySelector("#date4");
var iconFourEl = document.querySelector("#weather-image4");
var dayFourtemperature = document.querySelector("#temperature4");
var dayFourtempmin = document.querySelector("#temperature4min");
var dayFourhumidity = document.querySelector("#humidity4");
var dayFourwindSpeed = document.querySelector("#wind-speed4");


var dateDayfive = document.querySelector("#date5");
var iconFiveEl = document.querySelector("#weather-image5");
var dayFivetemperature = document.querySelector("#temperature5");
var dayFivetempmin = document.querySelector("#temperature5min");
var dayFivehumidity = document.querySelector("#humidity5");
var dayFivewindSpeed = document.querySelector("#wind-speed5");

var deletebutton = document.querySelector("#delete-button");


var getCurrentWeather = function () {
    event.preventDefault();

    var ApiKey = 'ee601a5be4293bbbbc2b2665840ba595';
    var searchInput = $("#city-input").val();

    if (searchInput === "") {
        alert("Please enter a city name to get started!");
    }

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&appid=" + ApiKey + "&units=imperial";


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
                imgEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")

                // get current lat and lon to get 5 days weather
                var currentLat = data.coord.lat;
                var currentLon = data.coord.lon;

                // have another fetch call for 5 days and uv index
                var fiveDaysWeatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLat}&lon=${currentLon}&exclude=minutely,hourly,alerts&units=imperial&appid=${ApiKey}`;

                fetch(fiveDaysWeatherURL)
                    .then(function (response) {
                        response.json().then(function (data) {
                            //   add current uv index
                            consoleData(data)
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


                            iconOneEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png")
                            dayOnetemperature.innerHTML = data.daily[1].temp.day + "°F";
                            dayOnetempmin.innerHTML = data.daily[1].temp.min + "°F";
                            dayOnehumidity.innerHTML = data.daily[1].humidity + "%";
                            dayOnewindSpeed.innerHTML = data.daily[1].wind_speed + " " + "Mph";


                            var travelTime2 = moment().add(2, 'day').format('M/D/YYYY');

                            dateDaytwo.innerHTML = travelTime2;


                            iconTwoEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png")
                            dayTwotemperature.innerHTML = data.daily[2].temp.day + "°F";
                            dayTwotempmin.innerHTML = data.daily[2].temp.min + "°F";
                            dayTwohumidity.innerHTML = data.daily[2].humidity + "%";
                            dayTwowindSpeed.innerHTML = data.daily[2].wind_speed + " " + "Mph";



                            var travelTime3 = moment().add(3, 'day').format('M/D/YYYY');


                            iconthreeEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png")
                            dateDaythree.innerHTML = travelTime3;
                            dayThreetemperature.innerHTML = data.daily[3].temp.day + "°F";
                            dayThreetempmin.innerHTML = data.daily[3].temp.min + "°F";
                            dayThreehumidity.innerHTML = data.daily[3].humidity + "%";
                            dayThreewindSpeed.innerHTML = data.daily[3].wind_speed + " " + "Mph";



                            var travelTime4 = moment().add(4, 'day').format('M/D/YYYY');

                            dateDayfour.innerHTML = travelTime4;
                            iconFourEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png")
                            dayFourtemperature.innerHTML = data.daily[4].temp.day + "°F";
                            dayFourtempmin.innerHTML = data.daily[4].temp.min + "°F";
                            dayFourhumidity.innerHTML = data.daily[4].humidity + "%";
                            dayFourwindSpeed.innerHTML = data.daily[4].wind_speed + " " + "Mph";


                            var travelTime5 = moment().add(5, 'day').format('M/D/YYYY');

                            dateDayfive.innerHTML = travelTime5;
                            iconFiveEl.setAttribute("src", "https://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + "@2x.png")
                            dayFivetemperature.innerHTML = data.daily[5].temp.day + "°F";
                            dayFivetempmin.innerHTML = data.daily[5].temp.min + "°F";
                            dayFivehumidity.innerHTML = data.daily[5].humidity + "%";
                            dayFivewindSpeed.innerHTML = data.daily[5].wind_speed + " " + "Mph";

                            saveToLocal(searchInput)
                        })
                    })



            });
        })

}

function saveToLocal(searchInput) {
    //save to local storage
    var searchedCities = [];

    if (localStorage.getItem("city")) {
        // this is a string
        // parse converts it back into an object
        searchedCities = JSON.parse(localStorage.getItem("city"))
    }

    // var searchedCities = searchInput;

    if (searchedCities.length < 6) {
        searchedCities.push(searchInput)
    } else {
        searchedCities.splice(0, 1)
        searchedCities.push(searchInput)
    }

    localStorage.setItem("city", JSON.stringify(searchedCities));
    // localStorage.getItem("city");
    renderHistory()
}

function consoleData(parameter) {
    console.log(parameter)
}

function renderHistory() {
    var historyEl = document.querySelector("#cityArray");
    historyEl.innerHTML = ""

    var history = JSON.parse(localStorage.getItem("city")) || [];

    if (history.length == 0) {
        var alertMessage = document.createElement("p")
        alertMessage.setAttribute("class", "h4a");
        alertMessage.textContent = "No History yet."
        historyEl.append(alertMessage)

    } else {
        for (i = 0; i < history.length; i++) {
            // var link = document.createElement("a");
            // var newButton = document.createElement("button");
            // newButton.innerText = history[i];
            // newButton.textContent = 
            var newButton = document.createElement("a");
            newButton.innerText = history[i];
            newButton.setAttribute("href", history[i].html_url);
            newButton.setAttribute("class", "general-button");


            historyEl.append(newButton);
            
            newButton.style.textTransform = "capitalize";

        }
    }
}

renderHistory();


searchButtonEl.addEventListener("click", getCurrentWeather);



