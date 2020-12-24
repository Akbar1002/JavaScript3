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
  const url = 'https://dog.ceo/api/breeds/image/random';
  xhr.open('GET', url);
  xhr.send();
}

getInfo();

// //Axios

function getInfoWithAxios() {
  axios
    .get('https://dog.ceo/api/breeds/image/random')

    .then(function (response) {
      const main = document.getElementById('main');
      let item = document.createElement('item');
      let img = response.data.message;
      main.appendChild(img);

      console.log(response.data.message);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log();
    });
}

getInfoWithAxios();

document.getElementById('click').onclick = function () {
  getInfo();
};
document.getElementById('click-axios').onclick = function () {
  getInfoWithAxios();
};