import { BackgroundImageController } from "./Controllers/BackgroundImageController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { TaskController } from "./Controllers/TaskController.js";

class App {
  backgroundImageController = new BackgroundImageController();
  timeController = new TimeController();
  quoteController = new QuoteController();
  weatherContoller = new WeatherController();
  taskController = new TaskController();
}

window["app"] = new App();
