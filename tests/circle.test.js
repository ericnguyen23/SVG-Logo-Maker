const Square = require("../lib/Square.js");

describe("Square component", () => {
  test("Should render a squared svg", () => {
    const newSquare = new Square();
    const expectedSquare = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="green"/>
        <text x="50" y="50" font-size="20" text-anchor="middle" fill="white">SVG</text>
      </svg>
    `;
    expect(newSquare.render("green", "SVG")).toEqual(expectedSquare);
  });
});
