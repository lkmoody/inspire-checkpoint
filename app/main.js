import { BackgroundImageController } from "./Controllers/BackgroundImageController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundImageController = new BackgroundImageController();
  timeController = new TimeController();
  quoteController = new QuoteController();
  weatherContoller = new WeatherController();
}

window["app"] = new App();
