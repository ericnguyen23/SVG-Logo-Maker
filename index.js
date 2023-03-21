const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");
const Square = require("./lib/square.js");

inquirer
  .prompt([
    { name: "text", message: "SVG text (max of 3 characters):" },
    {
      type: "list",
      name: "shape",
      message: "SVG shape:",
      choices: ["circle", "square", "triangle"],
    },
    { name: "color", message: "SVG color:" },
  ])
  .then((data) => {
    // get the first 3 characters of the string
    let trimmedText = data.text.substring(0, 3);

    switch (data.shape) {
      case "circle":
        const newCircle = new Circle();
        styledShape = newCircle.render(data.color, trimmedText);
        break;
      case "triangle":
        const newTriangle = new Triangle();
        styledShape = newTriangle.render(data.color, trimmedText);
        break;
      case "square":
        const newSquare = new Square();
        styledShape = newSquare.render(data.color, trimmedText);
        break;
    }

    fs.writeFile("./output/logo.svg", styledShape, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  });
