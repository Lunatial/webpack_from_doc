import _ from "lodash";
import { cube } from "./math.js";
require("./css/style.css");

var arr = ["kutya", "macska", "sün"];

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
  if (module.hot) {
    module.hot.accept("./print.js", function() {
      console.log("Accepting the updated printMe module!");
      document.body.removeChild(element);
      element = component(); // Re-render the "component" to update the click handler
      document.body.appendChild(element);
    });
  }
}

function component(arr = ["Hello", "from", "webpack"]) {
  //   let element = document.createElement("div");
  let element = document.createElement("pre");

  //   element.innerHTML = _.join(arr, " ");
  element.classList.add("hello");

  var btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  btn.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      var print = module.default;

      print();
    });

  element.innerHTML = ["Hello webpack!", "5 a harmadikon = " + cube(5)].join(
    "\n\n"
  );

  var brElement = document.createElement("br");

  element.appendChild(brElement);
  element.appendChild(btn);
  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

async function getComponent() {
  const { join } = await import(/* webpackChunkName: "lodash" */ "lodash");
  var divElement = document.createElement("div");
  var pElement = document.createElement("p");
  var brElement = document.createElement("br");

  pElement.innerHTML = join(["Lodashhal", "behúzva", "a", "component"], " ");

  divElement.appendChild(brElement);
  divElement.appendChild(pElement);

  return divElement;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
