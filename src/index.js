//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
const fName = "James";
const lName = "Sebastian";
// let cYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>
      Created by {fName} {lName}
    </p>
    <p>Copyright {new Date().getFullYear()} </p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
