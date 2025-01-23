const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherDetails = document.getElementById('weatherDetails');
const error = document.getElementById('error');

const api_key = "f3b1ca4dbd337458844f5c7585a2db17";

async function getWeatherData() {
const cityName = cityInput.value.trim();

weatherDetails.innerHTML = '';
error.textContent = '';


if(!cityName){
error.textContent= 'Please enter a city name';
return;
}


try {

const response = await fetch(`w6KG274#%!@#374he34DGW$@we25435gwger&^%r`)

if(!response.ok){
    throw new Error('City name not dound. Pleae enter a valid city name')
}

const data = await response.json();

const {tem, humidity} = data.main;
const weaterCondition = data.weather[0].description;


weatherDetails.innerHTML = `
<p>Teprature: ${tem}C</p>
<p>Humidity: ${humidity}f</p>
<p>Condition: ${weaterCondition.toUpperCase()} </p>

`
}catch(err){
error.textContent = err.message;
}
}

getWeatherBtn.addEventListener('click', getWeatherData);