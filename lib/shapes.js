const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

class Shape {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }
  // Create the shape for the SVG
  renderShape() {
    // Code to create circle shape
    if (this.shape === "circle") {
      const logoCircle = new Circle(this.shape, this.color);

      return logoCircle.renderCircle();
      // Code to create triangle shape
    } else if (this.shape === "triangle") {
      const logoTriangle = new Triangle(this.shape, this.color);

      return logoTriangle.renderTriangle();
      // Code to create square shape
    } else if (this.shape === "square") {
      const logoSquare = new Square(this.shape, this.color);

      return logoSquare.renderSquare();
    }
  }
}

module.exports = Shape;
