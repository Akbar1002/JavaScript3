'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

// Top menu-part

const topMenuPartContainer = document.createElement('div');
topMenuPartContainer.setAttribute('class', 'topMenuPart');
document.body.appendChild(topMenuPartContainer);

const h2 = document.createElement('h2');
h2.innerText = 'HYF Repositories';
topMenuPartContainer.appendChild(h2);

const select = document.createElement('select');
select.setAttribute('id', 'repoSelection');
const option = document.createElement('option');
option.innerText = 'Repo selection';
option.value = '';
topMenuPartContainer.appendChild(select);
select.appendChild(option);

// create main-part
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'mainContainer');
document.body.appendChild(mainContainer);
// left part
const leftPart = document.createElement('leftPart');
leftPart.setAttribute('class', 'leftPart');
mainContainer.appendChild(leftPart);

//table on left
const arr = ['Repository :', 'Description :', 'Forks :', 'Updated :'];
const table = document.createElement('table');
for (let i = 0; i < arr.length; i++) {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('class', 'tableRow');
  tableRow.innerText = arr[i];
  const tableData = document.createElement('td');
  tableData.innerText = '';
  leftPart.appendChild(table);
  table.appendChild(tableRow);
  table.appendChild(tableData);
}

// const listItem = document.createElement('list');
// list.appendChild(listItem);
// const name = document.getElementById('name');
// const description = document.getElementById('description');
// const fork = document.getElementById('fork');
// const update = document.getElementById('update');
// const repoSelection = document.getElementById('repoSelection');

// const placeholderRepos = [
//   {
//     name: 'SampleRepo1',
//     description: 'This repository is meant to be a sample',
//     forks: 5,
//     updated: '2020-05-27 12:00:00',
//   },
//   {
//     name: 'AndAnotherOne',
//     description: 'Another sample repo! Can you believe it?',
//     forks: 9,
//     updated: '2020-05-27 12:00:00',
//   },
//   {
//     name: 'HYF-Is-The-Best',
//     description:
//       "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
//     forks: 130,
//     updated: '2020-05-27 12:00:00',
//   },
// ];

// // // create options

// for (let i = 0; i < placeholderRepos.length; i++) {
//   const option = document.createElement('option');
//   option.value = placeholderRepos[i].name;
//   option.innerText = placeholderRepos[i].name;
//   repoSelection.appendChild(option);
// }

// //change info after selection
// repoSelection.addEventListener('change', changeInfo);
// function changeInfo() {
//   for (let i = 0; i < placeholderRepos.length; i++)
//     if (repoSelection.value == placeholderRepos[i].name) {
//       name.innerText = placeholderRepos[i].name;
//       description.innerText = placeholderRepos[i].description;
//       fork.innerText = placeholderRepos[i].forks;
//       update.innerText = placeholderRepos[i].updated;
//     }
// }

// //XHR request
// //XMLHttpRequest
// function getInfo() {
//   const xhr = new XMLHttpRequest();
//   xhr.responseType = 'json';

//   xhr.onload = function () {
//     const info = xhr.response[0].name;
//     listItem.innerText = info;
//     if (xhr.status < 400) {
//       console.log(info);
//     } else {
//       console.log('HTTP Error', xhr.status); // this part Seems not working, maybe I didnot now how to show it
//     }
//   };

//   xhr.onerror = function () {
//     console.log('Something Went Wrong!');
//   };
//   const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
//   xhr.open('GET', url);
//   xhr.send();
// }

// getInfo();
