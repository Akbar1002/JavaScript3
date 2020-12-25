const friendName = document.getElementById('friend');
const img = document.createElement('img');
document.body.appendChild(img);
img.style.width = '300px';
img.style.height = '250px';

document.getElementById('btnXhr').onclick = function () {
  getInfo();
};
document.getElementById('btnAxios').onclick = function () {
  getInfoWithAxios();
};

//XMLHttpRequest
function getInfo() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    const info = xhr.response;
    friendName.innerText = ` ${info.results[0].name.first} ${info.results[0].name.last}`;
    img.src = info.results[0].picture.large;
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

getInfo();

// //Axios

// // const axios = require('axios');

// Make a request for a user with a given ID
function getInfoWithAxios() {
  axios
    .get('https://www.randomuser.me/api')
    .then(function (response) {
      friendName.innerText = ` ${response.data.results[0].name.first} ${response.data.results[0].name.last}`;
      img.src = response.data.results[0].picture.large;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}

getInfoWithAxios();
