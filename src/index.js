import _ from 'lodash';

var arr = ['kutya', 'macska', 'sün'];

function component(arr = ['Hello', 'from', 'webpack']) {
    let element = document.createElement('div');

    element.innerHTML = _.join(arr, ' ');

    return element;
  }

  document.body.appendChild(component(arr));