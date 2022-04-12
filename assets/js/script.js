var submitEl = document.getElementById("submitEl")
var searchInput = document.getElementById("search-input");
var userSearcher 
var storage = JSON.parse(localStorage.getItem("search-input"))
if (storage) userSearcher = storage 
else userSearcher = []
// add eventListerer to submit 
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    var city = searchInput.value;
// click new variable for city
userSearcher.push(city)
localStorage.setItem("search-input", JSON.stringify(userSearcher))

    var firstUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=c8f8824f82f862c7696a070f2a1a8586";

    fetch(firstUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    var long = data.city.coord.lon;
                    var lat = data.city.coord.lat;
                    var url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=hourly,minutely,alerts&appid=c8f8824f82f862c7696a070f2a1a8586";

                    // fetch AP! data
                    fetch(url)
                        .then(function (response) {
                            if (response.ok) {
                                console.log(response);
                                response.json().then(function (data) {
                                    console.log(data);
                                    var uv = document.getElementById("uv1")
                                    uv.textContent = data.uvi
                                    for (var i = 0; i < 6; i++) {
                                        var timestamp = data.daily[i].dt;
                                        var newdate = new Date(timestamp*1000);
                                        var date = document.getElementById("date" + (i + 1))
                                        var temp = document.getElementById("temp" + (i + 1))
                                        var wind = document.getElementById("wind" + (i + 1))
                                        
                                        var humid = document.getElementById("humid" + (i + 1))
                                        date.innerText = newdate.toLocaleDateString()
                                        temp.innerText = data.daily[i].temp.day + " Kelvin"
                                        wind.innerText = data.daily[i].wind_speed + " mph"
                                        humid.innerText = data.daily[i].humidity + "% humidity"
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


