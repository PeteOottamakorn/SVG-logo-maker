// Combine text, shape, and colors into SVG logo

function Logo(text, shape) {
  return `
    <svg width='300' height='300'>
        ${shape}
        ${text}
    </svg>`;
}

module.exports = Logo;
