const Text = require("./text");
const Shape = require("./shapes");

// Combine text, shape, and colors into SVG logo
function generateLogo(data) {
  const logoText = new Text(data.text, data.textColor);
  const logoShape = new Shape(data.shape, data.shapeColor);

  // const renderedLogo = logoText.renderText()
  // const renderedShape = logoShape.renderShape

  return `
    <svg width="300" height="300">
        ${logoShape.renderShape()}
        ${logoText.renderText()}
    </svg>`;
}

module.exports = generateLogo;
