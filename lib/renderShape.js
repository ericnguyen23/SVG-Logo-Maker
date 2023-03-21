const Circle = require("./circle");
const Triangle = require("./triangle.js");
const Square = require("./square.js");
const WriteFile = require("./writeFile.js");

class RenderShape {
  constructor(shape, text, color) {
    this.shape = shape;
    this.text = text;
    this.color = color;
  }

  render(shape, text, color) {
    // get the first 3 characters of the string
    let trimmedText = text.substring(0, 3);
    let styledShape;

    switch (shape) {
      case "circle":
        const newCircle = new Circle();
        styledShape = newCircle.render(color, trimmedText);
        break;
      case "triangle":
        const newTriangle = new Triangle();
        styledShape = newTriangle.render(color, trimmedText);
        break;
      case "square":
        const newSquare = new Square();
        styledShape = newSquare.render(color, trimmedText);
        break;
    }

    const newWriteFile = new WriteFile();
    newWriteFile.render(styledShape);
  }
}

module.exports = RenderShape;
