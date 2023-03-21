const fs = require("fs");

class WriteFile {
  constructor(shape) {
    this.shape = shape;
  }

  render(shape) {
    return fs.writeFile("./output/logo.svg", `${shape}`, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }
}

module.exports = WriteFile;
