import { ProxyState } from "../AppState.js";

class TimeService {
  updateTime(time) {
    ProxyState.time = time;
  }

  async getTime() {
    ProxyState.time = new Date();
  }
}

export const timeService = new TimeService();