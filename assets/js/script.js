var submitEl = document.getElementById("submitEl")

// add eventListerer to submit 
submitEl.addEventListener("click", function(event) {
    event.preventDefault();
}
var = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid={c8f8824f82f862c7696a070f2a1a8586"
// fetch AP! data
fetch(url)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);

                    img.src = data.photos[0].image.web;
                })
            }
        })
})
current
current.temp
current.wind_speed
current.uvi
current.humidity
daily
standard
test({
"current": {
    "dt": 1595243443,
// when API data is fetched, use this for loop to render data to html

for (var i = 0; i < 6; i++) {
    var date = document.getElementById("date" + (i + 1))
    var temp = document.getElementById("temp" + (i + 1))
    var wind = document.getElementById("wind" + (i + 1))
    var uv = document.getElementById("uv" + (i + 1))
    var humid = document.getElementById("humid" + (i + 1))
    date.innerText = "Date " + (i + 1)
    temp.innerText = "Tempurature " + (i + 1)
    wind.innerText = "Wind " + (i + 1)
    uv.innerText = "UV index " + (i + 1)
    humid.innerText = "Humidity " + (i + 1)
}
