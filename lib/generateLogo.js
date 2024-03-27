const text = require("./text");
const shape = require("./shapes");

// Combine text, shape, and colors into SVG logo
function generateLogo(data) {
  const logoText = text(data.text, data.textColor);
  const logoShape = shape(data.shape, data.shapeColor);

  return `
    <svg width="300" height="300">
        ${logoShape}
        ${logoText}
    </svg>`;
}

module.exports = generateLogo;
