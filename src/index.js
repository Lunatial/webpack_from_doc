import _ from "lodash";
import "./css/style.css";
import printMe from "./print.js";

var arr = ["kutya", "macska", "sün"];

function component(arr = ["Hello", "from", "webpack"]) {
  let element = document.createElement("div");

  element.innerHTML = _.join(arr, " ");
  element.classList.add("hello");

  var btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
