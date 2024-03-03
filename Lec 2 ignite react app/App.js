import React from "react"
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", //tag
    {id: "heading"}, //tag Attributes
    "Hello world react!" //Children
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

