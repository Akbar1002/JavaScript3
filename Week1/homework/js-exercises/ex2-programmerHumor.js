// //XMLHttpRequest
// function getInfo() {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = 'json';

//   xhr.onload = function () {
//     const info = xhr.response.results;
//     if (xhr.status < 400) {
//       console.log(info);
//     } else {
//       console.log('HTTP Error', xhr.status); // this part Seems not working, maybe I didnot now how to show it
//     }
//   };

//   xhr.onerror = function () {
//     console.log('Something Went Wrong!');
//   };
//   const url = 'https://xkcd.now.sh/?comic=latest';
//   xhr.open('GET', url);
//   xhr.send();
// }

// getInfo();

// //Axios

function getInfoWithAxios() {
  axios
    .get('https://xkcd.now.sh/?comic=latest')

    .then(function (response) {
      const main = document.getElementById('main');
      const div = document.createElement('div');
      const img = response.data.img;
      // main.innerHTML = img;
      mian.appendChild(div);
      div.appendChild(img);
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
