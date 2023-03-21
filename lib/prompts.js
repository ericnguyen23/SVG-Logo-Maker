const inquirer = require("inquirer");
const RenderShape = require("./renderShape.js");

class Prompts {
  constructor() {}

  render() {
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
        const newRenderShape = new RenderShape();
        newRenderShape.render(data.shape, data.text, data.color);
      });
  }
}

module.exports = Prompts;
