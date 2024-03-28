const Shape = require("../lib/shapes");

describe("Shapes", () => {
  test("should render a blue triangle", () => {
    //Arrange
    const code = '<polygon points="150,0 300,300 0,300" fill="blue" />';
    //Act
    const shapeTest = new Shape("triangle", "blue");
    //Assert
    expect(shapeTest.renderShape()).toEqual(code);
  });
  test("should render a circle in the color flame using hexadecimal code", () => {
    //Arrange
    const code = '<circle r="125" cx="150" cy="150" fill="#E4572E" />';
    //Act
    const shapeTest = new Shape("circle", "#E4572E");
    //Assert
    expect(shapeTest.renderShape()).toEqual(code);
  });
  test("should render a green square", () => {
    //Arrange
    const code = '<rect width="250" height="250" x="25" y="25" fill="green" />';
    //Act
    const shapeTest = new Shape("square", "green");
    //Assert
    expect(shapeTest.renderShape()).toEqual(code);
  });
});
