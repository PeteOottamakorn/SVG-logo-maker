class Circle {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  renderCircle() {
    return `<circle r="125" cx="150" cy="150" fill="${this.color}" />`;
  }
}

module.exports = Circle;
