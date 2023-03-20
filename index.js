const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle.js");
const Triangle = require("./lib/triangle.js");

inquirer
  .prompt([
    { name: "color", message: "SVG color:" },
    { name: "shape", message: "SVG shape:" },
    { name: "text", message: "SVG text (max 3 chars):" },
  ])
  .then((data) => {
    switch (data.shape) {
      case "circle":
        const newCircle = new Circle();
        styledShape = newCircle.render(data.color, data.text);
        break;
      case "triangle":
        const newTriangle = new Triangle();
        styledShape = newTriangle.render(data.color, data.text);
        break;
    }

    fs.writeFile("./output/logo.svg", styledShape, (err) => {
      err ? console.log(err) : console.log("Success!");
    });
  });
