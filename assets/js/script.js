// declaring submit button
var submitEl = document.getElementById("submitEl");
// declaring search input
var searchInput = document.getElementById("search-input");
var historyEl = document.getElementById("history");
// declare userSearcher and setting item to storage
function weatherAPI(event) {
  event.preventDefault();

  var city = event.target.value;

  // click new variable for city, pushing user search of city to storage using JSON stringify
  userSearcher.push(city);
  localStorage.setItem("search-input", JSON.stringify(userSearcher));

  // establishing a url to get data from API open weather map for forecast and setting key to get data
  var firstUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=c8f8824f82f862c7696a070f2a1a8586";
  // here using fetch response to get longitude and latitude for a particular city
  fetch(firstUrl).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        var long = data.city.coord.lon;
        var lat = data.city.coord.lat;
        var url =
          "https://api.openweathermap.org/data/3.0/onecall?lat=" +
          lat +
          "&lon=" +
          long +
          "&units=imperial&exclude=hourly,minutely,alerts&appid=c8f8824f82f862c7696a070f2a1a8586";

        // fetch API data for a second onecall with key
        fetch(url).then(function (response) {
          if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
              console.log(data);
              // getting UV data and adding uvi data to text content
              var uv = document.getElementById("uv1");
              uv.textContent = data.uvi;
              // var currentEl = document.getElementById("ccity");
              // current.textContent = data.ccity;

              // a for statement to get the 1 day forcast and next five days getting date, temp and wind
              for (var i = 0; i < 6; i++) {
                // converting timestamp to new date
                var timestamp = data.daily[i].dt;
                var newdate = new Date(timestamp * 1000);
                // getting element by id, and index plus 1
                var date = document.getElementById("date" + (i + 1));
                var temp = document.getElementById("temp" + (i + 1));
                var wind = document.getElementById("wind" + (i + 1));
                var humid = document.getElementById("humid" + (i + 1));
                // putting data into innertext of cards that have 5 day forcast
                date.innerText = newdate.toLocaleDateString();
                temp.innerText =
                  "Temperature:  " + data.daily[i].temp.day + " Fahrenheit";
                wind.innerText =
                  "Wind speed:  " + data.daily[i].wind_speed + " mph";
                humid.innerText = data.daily[i].humidity + "%  Humidity";
              }
            });
          }
        });
      });
    }
  });
}
var userSearcher;
var storage = JSON.parse(localStorage.getItem("search-input"));
if (storage) {
  userSearcher = storage;

  for (var i = 0; i < userSearcher.length; i++) {
    var cityBtn = document.createElement("button");
    cityBtn.innerText = userSearcher[i];
    cityBtn.value = userSearcher[i];
    cityBtn.addEventListener("click", weatherAPI);
    historyEl.appendChild(cityBtn);
  }
} else userSearcher = [];

// add eventListerer to submit
submitEl.addEventListener("click", function (event) {
  event.preventDefault();

  var city = searchInput.value;
  var cityBtn = document.createElement("button");
  cityBtn.innerText = city;
  cityBtn.value = city;
  historyEl.appendChild(cityBtn);

  // click new variable for city, pushing user search of city to storage using JSON stringify
  userSearcher.push(city);
  localStorage.setItem("search-input", JSON.stringify(userSearcher));

  // establishing a url to get data from API open weather map for forecast and setting key to get data
  var firstUrl =
    "https://api.openweathermap.org/data/3.0/forecast?q=" +
    city +
    "&appid=c8f8824f82f862c7696a070f2a1a8586";
  // here using fetch response to get longitude and latitude for a particular city
  fetch(firstUrl).then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        var long = data.city.coord.lon;
        var lat = data.city.coord.lat;
        var url =
          "https://api.openweathermap.org/data/3.0/onecall?lat=" +
          lat +
          "&lon=" +
          long +
          "&units=imperial&exclude=hourly,minutely,alerts&appid=c8f8824f82f862c7696a070f2a1a8586";

        // fetch API data for a second onecall with key
        fetch(url).then(function (response) {
          if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
              console.log(data);
              // getting UV data and adding uvi data to text content
              var uv = document.getElementById("uv1");
              uv.textContent = data.uvi;
              // var currentEl = document.getElementById("ccity");
              // current.textContent = data.ccity;

              // a for statement to get the 1 day forcast and next five days getting date, temp and wind
              for (var i = 0; i < 6; i++) {
                // converting timestamp to new date
                var timestamp = data.daily[i].dt;
                var newdate = new Date(timestamp * 1000);
                // getting element by id, and index plus 1
                var date = document.getElementById("date" + (i + 1));
                var temp = document.getElementById("temp" + (i + 1));
                var wind = document.getElementById("wind" + (i + 1));
                var humid = document.getElementById("humid" + (i + 1));
                // putting data into innertext of cards that have 5 day forcast
                date.innerText = newdate.toLocaleDateString();
                temp.innerText =
                  "Temperature:  " + data.daily[i].temp.day + " Fahrenheit";
                wind.innerText =
                  "Wind speed:  " + data.daily[i].wind_speed + " mph";
                humid.innerText = data.daily[i].humidity + "%  Humidity";
              }
            });
          }
        });
      });
    }
  });
});
