import _ from 'lodash';
import './css/style.css';
import Icon from './img/usj_gG3b.jpg';

var arr = ['kutya', 'macska', 'sün'];

function component(arr = ['Hello', 'from', 'webpack']) {
    let element = document.createElement('div');

    element.innerHTML = _.join(arr, ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    // var myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    return element;
  }

  document.body.appendChild(component(arr));