const Text = require("../lib/text");

describe("Text", () => {
  test("should return the letter 'A' in yellow", () => {
    //Arrange
    const textCode = `<text x="150" y="150" fill="yellow" text-anchor="middle">A</text>`;
    //Act
    const textTest = new Text("A", "yellow");
    //Assert
    expect(textTest.renderText()).toEqual(textCode);
  });
  test("should return the letters 'PO' in blue", () => {
    //Arrange
    const textCode = `<text x="150" y="150" fill="blue" text-anchor="middle">PO</text>`;
    //Act
    const textTest = new Text("PO", "blue");
    //Assert
    expect(textTest.renderText()).toEqual(textCode);
  });
  test("should return the letters 'YES' in the color jade using hexadecimal code", () => {
    //Arrange
    const textCode = `<text x="150" y="150" fill="#26A96C" text-anchor="middle">YES</text>`;
    //Act
    const textTest = new Text("YES", "#26A96C");
    //Assert
    expect(textTest.renderText()).toEqual(textCode);
  });
});
