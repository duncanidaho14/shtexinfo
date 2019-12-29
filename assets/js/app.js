/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.

import "./../scss/app.scss";
const $ = require("jquery");
import 'bootstrap';

import * as React from "react";
import { render } from "react-dom";


import './index';
import './Counter';


function hello() {
  let name = "elhad";

  console.log("salut " + name);
}

hello();

function tick() {
  const element = (
    <div>
      <h1> Bonjour, monde!</h1>
      <h2> Il est {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  render(element, document.getElementById("hello"));
}

setInterval(tick, 1000);




