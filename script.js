data = [
  {
    type: "scatterpolar",
    r: [8, 7, 8, 2, 1, 5, 5, 8],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "VANCE"
  },
  {
    type: "scatterpolar",
    r: [7, 7, 7, 5, 2, 7, 8, 2],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "REMI"
  },
  {
    type: "scatterpolar",
    r: [6, 10, 5, 5, 5, 10, 10, 1],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "JAKE"
  },
  {
    type: "scatterpolar",
    r: [6, 5, 5, 3, 5, 5, 6, 10],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "KIMURA"
  },
  {
    type: "scatterpolar",
    r: [4, 8, 5, 8, 3, 7, 9, 9],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "ANGELA"
  },
  {
    type: "scatterpolar",
    r: [4, 5, 8, 5, 5, 5, 5, 4],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "AOIBHE"
  },
  {
    type: "scatterpolar",
    r: [2, 5, 3, 7, 5, 5, 9, 7],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "SYBIL"
  },
  {
    type: "scatterpolar",
    r: [1, 5, 3, 7, 5, 5, 9, 7],
    theta: ["STR", "CON", "SIZ", "DEX", "CHA", "INT", "WIL", "EDU"],
    fill: "toself",
    name: "OX"
  }
];

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 10]
    }
  }
};

Plotly.newPlot("myDiv", data, layout);
