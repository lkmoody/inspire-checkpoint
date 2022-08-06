import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/BackgroundImage')} */
  backgroundImage = {};
  /** @type {import('./Models/Quote')} */
  quote = {};

  /** @type {import('./Models/Weather')} */
  weather = {};
  
  time = new Date();
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
