class Square {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  renderSquare() {
    return `<rect width="250" height="250" x="25" y="25" fill="${this.color}" />`;
  }
}

module.exports = Square;
