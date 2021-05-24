import {apiKey} from "../config.js";

var units = "imperial";

async function getWeatherData(city) {
    var url = 
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    var response = await fetch(url);

    var weatherDataObject = await response.json();

    return weatherDataObject;
}

function processWeatherData(rawData) {
    var iconID = rawData.weather[0].icon;
    var iconURL = `http://openweathermap.org/img/wn/${iconID}@2x.png`;

    var weatherData = {
        city: rawData.name,
        country: rawData.sys.country,
        description: rawData.weather[0].description,
        temp: rawData.main.temp + " F",
        humidity: `Humidity: ${rawData.main.humidity}%`
    };

    return {iconURL, weatherData};
}

export {getWeatherData, processWeatherData};