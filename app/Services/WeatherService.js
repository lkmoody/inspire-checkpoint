import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { bcwApi } from "../Services/AxiosService.js";

class WeatherService {
    async  getWeather() {
        const response = await bcwApi.get('weather');
        ProxyState.weather = new Weather(response.data.main.temp, response.data.name);
    }
}

export const weatherService = new WeatherService();