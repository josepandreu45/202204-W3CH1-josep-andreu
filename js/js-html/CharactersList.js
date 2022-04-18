class CharactersList {
  element;

  constructor(tag, className, parentElement) {
    this.element = document.createElement(tag);
    this.element.className = className;
    parentElement.append(this.element);
  }
}

export default CharactersList;
