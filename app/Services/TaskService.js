import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { bcwApi } from "../Services/AxiosService.js";

class TaskService {
    async  getTasks() {
        const tasks = await bcwApi.get('lmoody/todos');
        ProxyState.tasks = tasks;
    }
}

export const taskService = new TaskService();