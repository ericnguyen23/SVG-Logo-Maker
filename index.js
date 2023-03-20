const inquirer = require("inquirer");
const Circle = require("./lib/circle.js");

inquirer.prompt([{ name: "color", message: "SVG color:" }]).then((data) => {
  const newCircle = new Circle();
  console.log(newCircle.render(data.color));
});
