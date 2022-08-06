import { ProxyState } from "../AppState.js";
import { timeService } from "../Services/TimeService.js";
import { Pop } from "../Utils/Pop.js";
import { bcwApi } from "../Services/AxiosService.js"


//Private
function _drawTime() {
    const time = ProxyState.time.toString().match(/ (\d\d:\d\d):\d\d/);
    document.getElementById('clock-widget').innerHTML = `<h1>${time[1]}</h1><div><h1>Hello Larry</h1>`;
}

function updateTime() {
    timeService.updateTime(new Date());
}

//Public
export class TimeController {
    constructor() {
        ProxyState.on('time', _drawTime);
        this.getTime();
        setInterval(updateTime, 60000);
    }

     async getTime() {
        try {
            await timeService.getTime();
        } catch (error) {
            Pop.error(error)
            console.error('[getTime]', error);
        }
    }
}