function displayTemperature(response) {
    console.log(response.data)
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city")
    let descriptionElement = document.querySelector("#description")
    temperatureElement.innerHTML = Math.round(response.data.main.temp)
    cityElement.innerHTML = (response.data.name)
}

let apiKey = "f9f0439a96ed3cf7c71b3f3742b80bfa"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature)