class Square {
  constructor(fillColor, text) {
    this.fillColor = fillColor;
    this.text = text;
  }

  render(fillColor, text) {
    return `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="${fillColor}"/>
        <text x="50" y="50" font-size="20" text-anchor="middle" fill="white">${text}</text>
      </svg>
    `;
  }
}

module.exports = Square;
