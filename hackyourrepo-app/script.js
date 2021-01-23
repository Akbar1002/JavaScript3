'use strict';

/*
  Write here your JavaScript for HackYourRepo!
*/

/* STEP-1 CREATE HTML ELEMENT & APPEND   */

const header = document.createElement('header');
const subHeader = document.createElement('P');
const repoSelection = document.createElement('SELECT');
const option = document.createElement('OPTION');
const mainContainer = document.createElement('mainContainer');
const leftSideContainer = document.createElement('leftSideContainer');
const rightSideContainer = document.createElement('rightSideContainer');
const contributorheader = document.createElement('H4');
const contributorsBody = document.createElement('div');
const contributorsEmpty = document.createElement('span');
const footer = document.createElement('footer');
const paragraphFooter = document.createElement('P');

function generateTable() {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');
  for (let i = 0; i < 4; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 2; j++) {
      const tableData = document.createElement('td');
      if (i === 0 && j === 1) {
        const repoName = document.createElement('a');
        repoName.id = 'repoName';
        repoName.href = '#';
        repoName.target = '_blank';
        tableData.appendChild(repoName);
      }
      if (j === 0) {
        tableData.classList.add('leftTd');
        tableData.id = `repoInfo${i}${j}`;
      }
      if (i != 0 && j === 1) {
        tableData.id = `repoData${i}${j}`;
      }
      row.appendChild(tableData);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  leftSideContainer.appendChild(table);
}

function appendChildren() {
  repoSelection.appendChild(option);

  header.appendChild(subHeader);
  header.appendChild(repoSelection);

  rightSideContainer.appendChild(contributorheader);
  rightSideContainer.appendChild(contributorsBody);

  mainContainer.appendChild(leftSideContainer);
  mainContainer.appendChild(rightSideContainer);

  footer.appendChild(paragraphFooter);

  document.body.appendChild(header);
  document.body.appendChild(mainContainer);
  document.body.appendChild(footer);
}

function assignProperty() {
  repoSelection.class = 'chooseYourRepo';
  mainContainer.id = 'mainContainer';
  leftSideContainer.id = 'leftSideContainer';
  rightSideContainer.id = 'rightSideContainer';
  contributorsBody.id = 'contributorsBody';
  contributorsEmpty.id = 'contributorsEmpty';

  document.getElementById('repoData11').id = 'description';
  document.getElementById('repoData21').id = 'forks';
  document.getElementById('repoData31').id = 'dataInfo';

  option.disabled = true;
  option.selected = true;
}

function addTextContent() {
  subHeader.textContent = 'HYF Repositories';
  paragraphFooter.textContent = 'HYF Repositories';
  option.textContent = 'Select Your Repo';
  contributorheader.textContent = 'Contributors';

  document.getElementById('repoInfo00').textContent = 'Repository :';
  document.getElementById('repoInfo10').textContent = 'Description :';
  document.getElementById('repoInfo20').textContent = 'Forks :';
  document.getElementById('repoInfo30').textContent = 'Updated :';
}

function createContent() {
  generateTable();
  appendChildren();
  assignProperty();
  addTextContent();
}

function getReposNames(gitHubRepoApi) {
  return gitHubRepoApi.map((element) => element.name);
}

function sortReposNames(arrayOfNames) {
  const orderdArray = arrayOfNames.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return orderdArray;
}

function createOptions(arrayOfOrderdReposNames) {
  arrayOfOrderdReposNames.forEach((element) => {
    const newOption = document.createElement('OPTION');
    repoSelection.appendChild(newOption);
    newOption.innerText = element;
  });
}

function createConnection(jasonData, name) {
  const foundRepoObj = jasonData.find((element) => element.name === name);
  return foundRepoObj;
}

function createBodyContributors(contributorsAPI) {
  contributorsAPI.forEach((element) => {
    const contributorList = document.createElement('div');
    const iconImage = document.createElement('img');
    const contributorName = document.createElement('a');
    const fileNum = document.createElement('div');

    contributorList.appendChild(iconImage);
    contributorList.appendChild(contributorName);
    contributorList.appendChild(fileNum);
    contributorsBody.appendChild(contributorList);

    iconImage.src = element.avatar_url;
    contributorName.href = element.html_url;
    contributorName.target = '_blank';

    contributorName.innerText = element.login;
    fileNum.innerText = element.contributions;
  });
}

function contributorsError(errorContributors) {
  const errorContent = document.createElement('SPAN');
  const errorMassage = document.createElement('P');

  errorContent.id = 'errorContent';
  errorMassage.id = 'errorMassage';

  errorContent.appendChild(errorMassage);
  contributorsBody.appendChild(errorContent);

  errorMassage.innerText = 'Error: ' + errorContributors;
}

/* STEP-2 GET DATA  */
function getContributors(url) {
  fetch(url)
    .then((result) => {
      if (result.status >= 200 && result.status < 400) {
        return result.json();
      }
    })
    .then((jsonContributors) => {
      if (jsonContributors.length == 0) {
        contributorsBody.appendChild(contributorsEmpty);
        contributorsEmpty.textContent = 'No Contributors!';
      } else {
        createBodyContributors(jsonContributors);
      }
    })
    .catch((errorContributors) => {
      contributorsError(errorContributors);
    });
}

function getReposInfo(jsonData) {
  repoSelection.onchange = function () {
    const CurrentRepo = createConnection(jsonData, this.value);
    repoName.innerText = this.value;
    repoName.href = CurrentRepo.html_url;
    description.innerText = CurrentRepo.description;
    forks.innerText = CurrentRepo.forks;
    dataInfo.innerText = CurrentRepo.updated_at
      .replace('a', ' ')
      .replace('b', ' ');
    getContributors(CurrentRepo.contributors_url);
    contributorsBody.innerHTML = '';
  };
}

function getData() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      }
    })
    .then((jsonData) => {
      const reposNames = getReposNames(jsonData);
      const reposNamesOrderd = sortReposNames(reposNames);
      createOptions(reposNamesOrderd);
      getReposInfo(jsonData);
    })
    .catch((error) => {
      mainAPIError(error);
    });
}

function mainFunction() {
  createContent();
  getData();
}

window.onload = mainFunction;
