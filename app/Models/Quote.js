import { generateId } from "../Utils/generateId.js"

export class Quote {
  constructor(author, content) {
    this.id = generateId();
    this.author = author;
    this.content = content;
  }

  get QuoteTemplate() {
    return /*html*/`
      <div>
        <h1>${this.content}</h1>
        <h3>- ${this.author}</h3>
      </div>
    `
  }
}
