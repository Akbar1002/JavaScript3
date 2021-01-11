'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/
const rightContainer = document.querySelector('.rightPart');
const list = document.getElementById('myList');
const listItem = document.createElement('list');
list.appendChild(listItem);
const name = document.getElementById('name');
const description = document.getElementById('description');
const fork = document.getElementById('fork');
const update = document.getElementById('update');
const repoSelection = document.getElementById('repoSelection');

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

// create options

for (let i = 0; i < placeholderRepos.length; i++) {
  const option = document.createElement('option');
  option.value = placeholderRepos[i].name;
  option.innerText = placeholderRepos[i].name;
  repoSelection.appendChild(option);
}

//change info after selection
repoSelection.addEventListener('change', changeInfo);
function changeInfo() {
  for (let i = 0; i < placeholderRepos.length; i++)
    if (repoSelection.value == placeholderRepos[i].name) {
      name.innerText = placeholderRepos[i].name;
      description.innerText = placeholderRepos[i].description;
      fork.innerText = placeholderRepos[i].forks;
      update.innerText = placeholderRepos[i].updated;
    }
}

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
