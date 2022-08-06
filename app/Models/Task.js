import { generateId } from "../Utils/generateId.js"

export class Task {
    constructor(description, user) {
        this.id = generateId();
        this.description = description;
        this.user = user;
        this.completed = false;
    }
}
