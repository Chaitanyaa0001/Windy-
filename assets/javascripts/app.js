window.addEventListener("DOMContentLoaded", initEvents);

function initEvents() {
    const API_KEY = "83690982743d4a90b26180416250504";
    const locationText = document.querySelector('.input-form');
    const searchInput = document.querySelector('.search-input');
    const header = document.querySelector(".header");
    const mainWeather = document.querySelector(".main-weather");
    const sunInfo = document.querySelector(".sun-info");
    const forecastContent = document.querySelector(".forecast-content");
    const head = document.querySelector(".heading")
    const forecastContainer = document.querySelector(".forecast-container");
    const fixedDataCities = document.querySelector(".fixed-data-cities");
    const stateContainer = document.querySelector(".state-container");
    const stateContent = document.querySelector(".state-content");
    const footer = document.querySelector("footer");



    let location;

    locationText.addEventListener("submit", (e) => {
        e.preventDefault();
        location = searchInput.value;   
        getWeather();
        getNewDelhiState();
        getMumbaiState();
        getKolkataState();

        document.querySelector('.weather-container').style.display = 'flex';


    });

    const getWeather = async () => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=yes&alerts=no`);
    const data = await response.json();

    // Updating header with location data
    header.innerHTML = `
       <div class='header-container'>
        <div class="location">
            <i class="fas fa-map-marker-alt"></i> 
            <h3>${data.location.name}, ${data.location.region}</h3>
        </div>
        <div class="time">
            <i class="far fa-clock"></i>
            <h3>${data.location.localtime}</h3> 
        </div>
       </div>
    `;

    // Updating main weather section
    mainWeather.innerHTML = `
        <div class="weather-icon">
            <img src='${data.current.condition.icon}' alt='weather-image' />
            <p>${data.current.condition.text}</p>
        </div>
        <div class="temperature">
            <p>${data.current.temp_c}°C</p>
            <sup class="feels-like">Feels like: ${data.current.feelslike_c}°C</sup>
        </div>
        <div class="details-box">
            <p><i class="fas fa-tint"></i> Humidity: ${data.current.humidity}%</p>
            <p><i class="fas fa-wind"></i> Wind: ${data.current.wind_kph} m/s</p>
            <p><i class="fas fa-thermometer-half"></i> Pressure: ${data.current.pressure_mb} hPa</p>
            <p><i class="fas fa-eye"></i> Visibility: ${data.current.vis_km} km</p>
        </div>
    `;

    // Adding sun info
    sunInfo.innerHTML = `
        <div class="sxun-item">
            <p>Latitude</p>
            <strong>${data.location.lat}</strong>
        </div>
        <div class="sun-item">
            <p>Longitude</p>
            <strong>${data.location.lon}</strong>
        </div>
    `;

    // Adding the forecast container and state content heading
    forecastContainer.innerHTML = `
        <h2 class="forecast-heading">3-Day Forecast/States Forcaste</h2>
        <div class="forecast-content"></div>
    `;

    footer.classList.add("show");




data.forecast.forecastday.forEach((card) => {
    forecastContainer.innerHTML += `
        <div class="forecast-card">
            <h3 class="date">${card.date}</h3>
            <div class="weather-icon">
                <img src="${card.day.condition.icon}" alt="icon" />
                <p>${card.day.condition.text}</p>
            </div>
            <div class="temperature">
                <div class="day-temp">
                    <h5>Day</h5>
                    <p>${card.day.maxtemp_c}°C</p>
                </div>
                <div class="night-temp">
                    <h5>Night</h5>
                    <p>${card.day.mintemp_c}°C</p>
                </div>
            </div>
            <div class="weather-details">
                <p>🌡 Humidity: ${card.day.avghumidity}%</p>
                <p>💨 Wind: ${card.day.maxwind_kph} km/h</p>
                <p>🌡 Pressure: ${data.current.pressure_mb} hPa</p>
                <p>🌧 Precip: ${card.day.totalprecip_mm} mm</p>
            </div>
        </div>
    `;
});

    };



    const getNewDelhiState = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=New Delhi&days=3&aqi=yes&alerts=no`);
        const data = await response.json();
        stateContainer.innerHTML += `
            <div class='state-card'>
                <h3 class="date">${data.location.localtime}</h3>
                <h3 class="fx-state">${data.location.name}</h3>
                <div class="weather-icon">
                    <img src="${data.current.condition.icon}" alt='weatherimage' />
                    <h6>${data.current.condition.text}</h6>
                </div>
                <div class="temperature">
                    <div class="day-temp">
                        <h5>Day</h5>
                        <p>${data.current.temp_c}</p>
                    </div>
                    <div class="night-temp">
                        <h5>Night</h5>
                        <p>${data.location.lat}</p>
                    </div>
                </div>
                <div class="weather-details">
                    <p>🌡 Humidity: ${data.current.humidity}</p>
                    <p>💨 Wind: ${data.current.wind_kph}</p>
                    <p>🌡 Pressure: ${data.current.pressure_mb}</p>
                    <p>🌧 Precip: ${data.current.precip_mm}</p>
                </div>
            </div>
        `;
    };

    const getMumbaiState = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Mumbai&days=3&aqi=yes&alerts=no`);
        const data = await response.json();
        stateContainer.innerHTML += `
            <div class='state-card'>
                <h3 class="date">${data.location.localtime}</h3>
                <h3 class="fx-state">${data.location.name}</h3>
                <div class="weather-icon">
                    <img src="${data.current.condition.icon}" alt='weatherimage' />
                    <h6>${data.current.condition.text}</h6>
                </div>
                <div class="temperature">
                    <div class="day-temp">
                        <h5>Day</h5>
                        <p>${data.current.temp_c}</p>
                    </div>
                    <div class="night-temp">
                        <h5>Night</h5>
                        <p>${data.location.lat}</p>
                    </div>
                </div>
                <div class="weather-details">
                    <p>🌡 Humidity: ${data.current.humidity}</p>
                    <p>💨 Wind: ${data.current.wind_kph}</p>
                    <p>🌡 Pressure: ${data.current.pressure_mb}</p>
                    <p>🌧 Precip: ${data.current.precip_mm}</p>
                </div>
            </div>
        `;
    };

    const getKolkataState = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Kolkata&days=3&aqi=yes&alerts=no`);
        const data = await response.json();
        stateContainer.innerHTML += `
            <div class='state-card'>
                <h3 class="date">${data.location.localtime}</h3>
                <h3 class="fx-state">${data.location.name}</h3>
                <div class="weather-icon">
                    <img src="${data.current.condition.icon}" alt='weatherimage' />
                    <h6>${data.current.condition.text}</h6>
                </div>
                <div class="temperature">
                    <div class="day-temp">
                        <h5>Day</h5>
                        <p>${data.current.temp_c}</p>
                    </div>
                    <div class="night-temp">
                        <h5>Night</h5>
                        <p>${data.location.lat}</p>
                    </div>
                </div>
                <div class="weather-details">
                    <p>🌡 Humidity: ${data.current.humidity}</p>
                    <p>💨 Wind: ${data.current.wind_kph}</p>
                    <p>🌡 Pressure: ${data.current.pressure_mb}</p>
                    <p>🌧 Precip: ${data.current.precip_mm}</p>
                </div>
            </div>
        `;
    };
}

console.log("Weather app script loaded successfully.");
