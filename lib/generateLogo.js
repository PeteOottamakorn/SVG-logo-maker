const Text = require("./text");
const Shape = require("./shapes");

// Combine text, shape, and colors into SVG logo
function generateLogo(data) {
  const logoText = Text(data.text, data.textColor);
  const logoShape = Shape(data.shape, data.shapeColor);

  return `
    <svg width="300" height="300">
        ${logoShape}
        ${logoText}
    </svg>`;
}

module.exports = generateLogo;
