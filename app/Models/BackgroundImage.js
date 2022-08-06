import { generateId } from "../Utils/generateId.js"

export class BackgroundImage {
  constructor(author, query, imageUrl) {
    this.id = generateId();
    this.author = author;
    this.query = query;
    this.imageUrl = imageUrl;
  }

  get BackgroundImageTemplate() {
    return /*html*/`
      <div>
        <h3>${this.author}</h3>
        <h4>${this.query}<h4>
      </div>
    `
  }
}