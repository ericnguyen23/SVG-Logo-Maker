class Triangle {
  constructor(fillColor, text) {
    this.fillColor = fillColor;
    this.text = text;
  }

  render(fillColor, text) {
    return `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50 15, 100 100, 0 100" fill="${fillColor}"/>
        <text x="50" y="75" font-size="20" text-anchor="middle" fill="white">${text}</text>
      </svg>
    `;
  }
}

module.exports = Triangle;
