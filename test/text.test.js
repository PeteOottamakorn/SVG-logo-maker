const Text = require("../lib/text");

describe("Text", () => {
  test("should return the letter 'A' in yellow", () => {
    //Arrange
    const textCode = `<text x="150" y="175" fill="yellow" text-anchor="middle" font-size="70">A</text>`;
    //Act
    const textTest = new Text("A", "yellow");
    //Assert
    expect(textTest.renderText()).toEqual(textCode);
  });
  test("should return the letters 'PO' in blue", () => {
    //Arrange
    const textCode = `<text x="150" y="175" fill="blue" text-anchor="middle" font-size="70">PO</text>`;
    //Act
    const textTest = new Text("PO", "blue");
    //Assert
    expect(textTest.renderText()).toEqual(textCode);
  });
  test("should return the letters 'YES' in the color jade using hexadecimal code", () => {
    //Arrange
    const textCode = `<text x="150" y="175" fill="#26A96C" text-anchor="middle" font-size="70">YES</text>`;
    //Act
    const textTest = new Text("YES", "#26A96C");
    //Assert
    expect(textTest.renderText()).toEqual(textCode);
  });
});
