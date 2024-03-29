class Triangle {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  renderTriangle() {
    return `<polygon points="150,0 300,300 0,300" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
