class Component {
  element;

  constructor() {
    this.element = document.createElement("li");
    this.element.className = "character col";
    document.querySelector(".characters-list").append(this.element);
  }
}

export default Component;
