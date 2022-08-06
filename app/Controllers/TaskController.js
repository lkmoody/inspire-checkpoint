import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";
import { Pop } from "../Utils/Pop.js";
import { bcwApi } from "../Services/AxiosService.js"


//Private
function _drawTasks() {
    console.log(ProxyState.tasks);
}

//Public
export class TaskController {
    constructor() {
        ProxyState.on('tasks', _drawTasks);
        this.getTasks();
    }

    async getTasks() {
        try {
            await taskService.getTasks();
        } catch (error) {
            Pop.error(error)
            console.error('[getTasks]', error);
        }
    }
}