const humor = document.getElementById('main');
const img = document.createElement('img');
document.body.appendChild(img);

// document.getElementById('btnXhr').onclick = function () {
//   getInfo();
// };

// document.getElementById('btnAxios').onclick = function () {
//   getInfoWithAxios();
// };

//XMLHttpRequest
function getInfo() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onload = function () {
    const info = xhr.response;
    humor.innerText = `${info.alt}`;
    img.src = info.img;
    if (xhr.status < 400) {
      console.log(info);
    } else {
      console.log('HTTP Error', xhr.status); // this part Seems not working, maybe I didnot now how to show it
    }
  };

  xhr.onerror = function () {
    console.log('Something Went Wrong!');
  };
  const url = 'https://xkcd.now.sh/?comic=latest';
  xhr.open('GET', url);
  xhr.send();
}

getInfo();

// //Axios

function getInfoWithAxios() {
  axios
    .get('https://xkcd.now.sh/?comic=latest')

    .then(function (response) {
      img.src = response.data.img;

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
