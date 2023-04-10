console.log("hey");

const parent = React.createElement(
  "div",
  { id: "child" },
  "This is a child div inside root"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
