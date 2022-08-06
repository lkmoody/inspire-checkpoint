import { generateId } from "../Utils/generateId.js"

export class Weather {
    constructor(temp, city) {
        this.id = generateId();
        this.temp = parseFloat(temp);
        this.city = city;
        this.tempFahrenheit = true;
    }

    set TempFahrenheit(value) {
        this.tempFahrenheit = value;
    }

    get Temp() {
        if (this.tempFahrenheit) {
            return ((this.temp - 273.15) * 1.8) + 32;
        }

        return this.temp - 273.15;
    }

    get WeatherTemplate() {
        return /*html*/`
      <div>
        <h2>${parseInt(this.Temp)}</h2>
        <h4>${this.city}</h4>
      </div>
    `
    }
}
