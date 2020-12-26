'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
const rightContainer = document.querySelector('.rightPart');
const list = document.getElementById('myList');
const listItem = document.createElement('list');
list.appendChild(listItem);

//XHR request
//XMLHttpRequest
function getInfo() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    const info = xhr.response;
    listItem.innerText = info.bio;
    if (xhr.status < 400) {
      console.log(info);
    } else {
      console.log('HTTP Error', xhr.status); // this part Seems not working, maybe I didnot now how to show it
    }
  };

  xhr.onerror = function () {
    console.log('Something Went Wrong!');
  };
  const url = 'https://api.github.com/users/defunkt';
  xhr.open('GET', url);
  xhr.send();
}

getInfo();

// //Axios

// // const axios = require('axios');

// Make a request for a user with a given ID
function getInfoWithAxios() {
  axios
    .get('https://api.github.com/users/defunkt')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}

getInfoWithAxios();
