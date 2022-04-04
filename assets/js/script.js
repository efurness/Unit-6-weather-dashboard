var submitEl = document.getElementById("submitEl")

// add eventListerer to submit 
// fetch AP! data
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
