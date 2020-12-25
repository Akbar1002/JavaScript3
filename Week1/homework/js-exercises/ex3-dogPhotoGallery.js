const gallery = document.getElementById('gallery');
const main = document.querySelector('#main');
const li = document.createElement('li');
const img = document.createElement('img');
main.appendChild(li);
li.appendChild(img);
img.style.width = '500px';
img.style.height = '400px';

document.getElementById('click').onclick = function () {
  getInfo();
};
document.getElementById('click-axios').onclick = function () {
  getInfoWithAxios();
};

//XMLHttpRequest
function getInfo() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    const info = xhr.response;
    img.src = info.message;
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
      img.src = response.data.message;

      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      console.log();
    });
}

getInfoWithAxios();
