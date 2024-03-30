class Text {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  renderText() {
    const logoText = this.text;
    // Code to create the text within the shape
    if (logoText.length < 4) {
      return `<text x="150" y="175" fill="${this.color}" text-anchor="middle" font-size="70">${this.text}</text>`;
    }
  }
}
module.exports = Text;
