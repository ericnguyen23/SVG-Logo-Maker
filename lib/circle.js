class Circle {
  constructor(fillColor) {
    this.fillColor = fillColor;
  }

  render(fillColor) {
    return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${fillColor}"/>
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>;`;
  }
}

module.exports = Circle;
