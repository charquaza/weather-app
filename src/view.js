var loadingElem = document.querySelector("div.loading-screen");
var weatherDivElem = document.querySelector("div.weather-container");
var errorElem = document.querySelector("div.error-screen");

var view = {
    updateWeatherElements({iconURL, weatherData}) {
        var iconElem = document.querySelector("img.icon");
        iconElem.src = iconURL;
    
        var dataKeys = Object.keys(weatherData);
        dataKeys.forEach(function setElemText(key) {
            var elem = document.querySelector("p." + key);
            elem.textContent = weatherData[key];
        });
    },

    displayLoadingScreen() {
        errorElem.classList.add("hidden");

        weatherDivElem.classList.add("hidden");
    
        loadingElem.classList.remove("hidden");
    },

    displayWeather() {
        errorElem.classList.add("hidden");

        loadingElem.classList.add("hidden");
    
        weatherDivElem.classList.remove("hidden");
    },

    displayErrorScreen() {
        loadingElem.classList.add("hidden");

        weatherDivElem.classList.add("hidden");

        errorElem.classList.remove("hidden");
    }
};

export {view};