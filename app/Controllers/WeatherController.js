import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { bcwApi } from "../Services/AxiosService.js"


//Private
function _drawWeather() {
    const weather = ProxyState.weather;
    document.getElementById('weather-widget').innerHTML = weather.WeatherTemplate;
}

//Public
export class WeatherController {
    constructor() {
        ProxyState.on('weather', _drawWeather);
        this.getWeather();
    }

    async getWeather() {
        try {
            await weatherService.getWeather();
        } catch (error) {
            Pop.error(error)
            console.error('[getWeather]', error);
        }
    }

    changeUnit() {
        weatherService.changeUnit();
    }
}