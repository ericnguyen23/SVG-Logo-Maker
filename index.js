const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/circle.js");

inquirer.prompt([{ name: "color", message: "SVG color:" }]).then((data) => {
  const newCircle = new Circle();
  styledCircle = newCircle.render(data.color);

  fs.writeFile("./output/logo.svg", styledCircle, (err) => {
    err ? console.log(err) : console.log("Success!");
  });
});
