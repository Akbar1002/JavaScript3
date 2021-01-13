const fetchData = (url) => fetch(url);

async function main(url) {
  const select = document.createElement('select');
  const options = document.createElement('option');
  options.innerText = 'Please select';
  options.value = '';
  select.appendChild(options);
  const imgContainer = document.createElement('div');
  document.body.appendChild(select);
  document.body.appendChild(imgContainer);
  const data = await fetchData(url).then((res) => res.json());
  addP(data.results, select);
  select.addEventListener('change', async () => {
    const url = select.value;
    const response = await fetchData(url).then((res) => res.json());
    addImg(response.sprites.front_default, imgContainer);
  });
}

const addP = (response, target) => {
  response.forEach((element) => {
    const option = document.createElement('option');
    option.innerText = element.name;
    option.value = element.url;
    target.appendChild(option);
  });
};
const addImg = (res, target) => {
  target.innerHTML = null;
  const img = document.createElement('img');
  img.src = res;
  target.appendChild(img);
};

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
window.onload = () => main(baseUrl);
