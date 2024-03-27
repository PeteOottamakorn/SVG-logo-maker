function text(text, color) {
  // Code to create the text within the shape
  return `<text x="150" y="150" fill="${color}" text-anchor="middle">${text}</text>`;
}

module.exports = text;
