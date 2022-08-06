import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";
import { Pop } from "../Utils/Pop.js";
import { bcwApi } from "../Services/AxiosService.js"


//Private
function _drawTasks() {
    const taskList = document.getElementById('task-widget');
    let total = 0;
    let completed = 0;
    taskList.innerHTML = "";
    ProxyState.tasks.forEach(t => {
        taskList.innerHTML += t.TaskTemplate;

        ++total;
        if (t.completed) {
            ++completed;
        }
    });

    document.getElementById('task-count').innerHTML = `${completed} of ${total}`;
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

    async addTask(event, description) {
        if (event.key === "Enter") {
            document.getElementById('task-description').value = "";
            try {
                await taskService.addTask(description);
            } catch (error) {
                Pop.error(error)
                console.error('[addTask]', error);
            }
        }
    }

    async updateTask(id, completed) {
        try {
            await taskService.updateTask(id, completed);
        } catch (error) {
            Pop.error(error)
            console.error('[updateTask]', error);
        }
    }

    async deleteTask(id) {
        if (confirm("Are you sure?")) {
            try {
                await taskService.deleteTask(id);
            } catch (error) {
                Pop.error(error)
                console.error('[deleteTask]', error);
            }
        }
    }
}