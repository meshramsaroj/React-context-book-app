const mytheme = {
  global: {
    colors: {
      brand: {
        dark: "#e64cec",
        light: "#e64cec",
      },
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
      text: {
        dark: "#ffff",
        light: "#333333",
      },
      border: {
        dark: "#444444",
        light: "#CCCCCC",
      },
      control: {
        light: "brand",
        dark: "#e64cec",
      },
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#57b4aa",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC",
      "graph-0": "brand",
      "graph-1": "status-warning",
    },
    font: {
      family: "Helvetica",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
      textDecoration: "none",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
    // focus: { border: { color : "#fff" } },
  },
  anchor: {
    color: "white",
    hover: {
      textDecoration: "none",
      border: "2px solid oranged ",
    },
  },
  heading: {
    font: {
      size: "20px",
    },
  },
  card : {
      header : {
          color : "#fff",
      }
  }
};

export default mytheme;
