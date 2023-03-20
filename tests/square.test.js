const Circle = require("../lib/circle.js");

describe("Circle component", () => {
  test("Should render a circular svg", () => {
    const newCircle = new Circle();
    const expectedCircle = `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
      </svg>;
    `;
    expect(newCircle.render("green", "SVG")).toEqual(expectedCircle);
  });
});
