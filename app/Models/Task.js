import { generateId } from "../Utils/generateId.js"

export class Task {
    constructor(description, user, completed, id = generateId()) {
        this.id = id;
        this.description = description;
        this.user = user;
        this.completed = completed;
    }

    get TaskTemplate() {
        return /*html*/`
            <li>
              <input type="checkbox" onclick="app.taskController.updateTask('${this.id}', this.checked);" id="${this.id}" ${this.completed ? 'checked' : ''}>
              <label for"${this.id}" ${this.completed ? "class='strike-through'" : ''}>${this.description}</label>
              <button onclick="javascript:app.taskController.deleteTask('${this.id}');">Delete</button>
            </li>
        `
    }
}
