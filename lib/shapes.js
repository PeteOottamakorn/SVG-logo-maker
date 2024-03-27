// Create the shape for the SVG
function shape(shape, color) {
  // Code to create circle shape
  if (shape === "circle") {
    return `<circle r="125" cx="150" cy="150" fill="${color}" />`;
    // Code to create triangle shape
  } else if (shape === "triangle") {
    return `<polygon points="150,0 300,300 0,300" fill="${color}" />`;
    // Code to create square shape
  } else if (shape === "square") {
    return `<rect width="250" height="250" x="25" y="25" fill="${color}" />`;
  }
}

module.exports = shape;
