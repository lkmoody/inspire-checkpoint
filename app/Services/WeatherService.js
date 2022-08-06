import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { bcwApi } from "../Services/AxiosService.js";

class WeatherService {
    async  getWeather() {
        const response = await bcwApi.get('weather');
        let tempFahrenheit = true;
        if(ProxyState.weather) {
            tempFahrenheit = ProxyState.weather.tempFahrenheit;
        }
        ProxyState.weather = new Weather(response.data.main.temp, response.data.name, tempFahrenheit);
    }

    changeUnit() {
        ProxyState.weather.tempFahrenheit = !ProxyState.weather.tempFahrenheit;
        this.getWeather();
    }
}

export const weatherService = new WeatherService();