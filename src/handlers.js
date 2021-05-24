import {view} from "./view.js";
import {getWeatherData, processWeatherData} from "./weather.js";

var cityInputElem = document.getElementById("city");

var handlers = {
    handleSearch() {
        var city = cityInputElem.value;
    
        if (city) {
            view.displayLoadingScreen();
    
            getWeatherData(city)
                .then(function getData(weatherData) {
                    var processedData = processWeatherData(weatherData);
    
                    view.updateWeatherElements(processedData);
    
                    view.displayWeather();
                })
                .catch(function handleError() {
                    view.displayErrorScreen();
                });
        }
    }
};


export {handlers};