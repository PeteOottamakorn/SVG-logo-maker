class Shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }
  // Create the shape for the SVG
  renderShape() {
    // Code to create circle shape
    if (this.shape === "circle") {
      return `<circle r="125" cx="150" cy="150" fill="${this.color}" />`;
      // Code to create triangle shape
    } else if (this.shape === "triangle") {
      return `<polygon points="150,0 300,300 0,300" fill="${this.color}" />`;
      // Code to create square shape
    } else if (this.shape === "square") {
      return `<rect width="250" height="250" x="25" y="25" fill="${this.color}" />`;
    }
  }
}

module.exports = Shape;
