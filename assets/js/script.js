// declaring submit button
var submitEl = document.getElementById("submitEl")
// declaring search input
var searchInput = document.getElementById("search-input");
// declare userSearcher and settin item to storage
var userSearcher 
var storage = JSON.parse(localStorage.getItem("search-input"))
if (storage) userSearcher = storage 
else userSearcher = []

// add eventListerer to submit 
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    var city = searchInput.value;

// click new variable for city, pushing user search of city to storage using JSON stringify
userSearcher.push(city)
localStorage.setItem("search-input", JSON.stringify(userSearcher))

// establishing a url to get data from API open weather map for forecast and setting key to get data
    var firstUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=c8f8824f82f862c7696a070f2a1a8586";
// here using fetch response to get longitude and latitude for a particular city
    fetch(firstUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    var long = data.city.coord.lon;
                    var lat = data.city.coord.lat;
                    var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=hourly,minutely,alerts&appid=c8f8824f82f862c7696a070f2a1a8586";

                    // fetch API data for a second onecall with key
                    fetch(url)
                        .then(function (response) {
                            if (response.ok) {
                                console.log(response);
                                response.json().then(function (data) {
                                    console.log(data);
                                    // getting UV data and adding uvi data to text content
                                    var uv = document.getElementById("uv1")
                                    uv.textContent = data.uvi
                                    
                // a for statement to get the 1 day forcast and next five days getting date, temp and wind
                                    for (var i = 0; i < 6; i++) {
                                        // converting timestamp to new date
                                        var timestamp = data.daily[i].dt;
                                        var newdate = new Date(timestamp*1000);
                                        // getting element by id, and index plus 1
                                        var date = document.getElementById("date" + (i + 1))
                                        var temp = document.getElementById("temp" + (i + 1))
                                        var wind = document.getElementById("wind" + (i + 1))
                                        var humid = document.getElementById("humid" + (i + 1))
                                        // putting data into innertext of cards that have 5 day forcast
                                        date.innerText = newdate.toLocaleDateString()
                                        temp.innerText = "Temperature " + data.daily[i].temp.day + " Kelvin"
                                        wind.innerText = "Wind speed " + data.daily[i].wind_speed  + " mph"
                                        humid.innerText = data.daily[i].humidity + "%  Humidity"
                                    }
                                    
                                })
                            }
                        })

                })
            }
    })
})

// current
// current.temp
// current.wind_speed
// current.uvi
// current.humidity
// daily
// standard
// test({
// "current": {
//     "dt": 1595243443,
// when API data is fetched, use this for loop to render data to html


