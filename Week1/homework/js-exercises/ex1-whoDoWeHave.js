//XMLHttpRequest
function getInfo() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    const info = xhr.response;
    if (xhr.status < 400) {
      console.log(info);
    } else {
      console.log('HTTP Error', xhr.status); // this part Seems not working, maybe I didnot now how to show it
    }
  };

  xhr.onerror = function () {
    console.log('Something Went Wrong!');
  };
  const url = 'https://www.randomuser.me/api';
  xhr.open('GET', url);
  xhr.send();
}

document.getElementById('btn').onclick = function () {
  getInfo();
};

getInfo();

// //Axios

// // const axios = require('axios');

// Make a request for a user with a given ID
function getInfoWithAxios() {
  axios
    .get('https://www.randomuser.me/api')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}

getInfoWithAxios();
