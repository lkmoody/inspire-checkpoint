import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { bcwApi } from "../Services/AxiosService.js";

const TASK_OWNER = 'lmoody';

class TaskService {
    async  getTasks() {
        const response = await bcwApi.get(`${TASK_OWNER}/todos`);

        const tasks = [];
        response.data.forEach(t => {
            tasks.push(new Task(t.description, t.user, t.completed, t.id));
        });

        ProxyState.tasks = tasks;
    }

    async addTask(description) {
        await bcwApi.post(`${TASK_OWNER}/todos`, {description: description});
        await this.getTasks();
    }

    async updateTask(id, completed) {
        const response = await bcwApi.put(`${TASK_OWNER}/todos/${id}`, {completed: completed});
        this.getTasks();
    }

    async deleteTask(id) {
        const response = await bcwApi.delete(`${TASK_OWNER}/todos/${id}`);
        this.getTasks();
    }
}

export const taskService = new TaskService();