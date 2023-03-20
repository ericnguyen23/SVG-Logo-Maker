const Triangle = require("../lib/triangle.js");

describe("Triangle component", () => {
  test("Should render a triangular svg", () => {
    const newTriangle = new Triangle();
    const expectedTriangle = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" fill="green"/>
        <text x="50" y="75" font-size="20" text-anchor="middle" fill="white">SVG</text>
      </svg>
    `;
    expect(newTriangle.render("green", "SVG")).toEqual(expectedTriangle);
  });
});
