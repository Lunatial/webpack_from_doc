import _ from 'lodash';
import './css/style.css';
import printMe from './print.js';

var arr = ['kutya', 'macska', 'sün'];

function component(arr = ['Hello', 'from', 'webpack']) {
    let element = document.createElement('div');

    element.innerHTML = _.join(arr, ' ');
    element.classList.add('hello');

    var btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
  }

  document.body.appendChild(component(arr));