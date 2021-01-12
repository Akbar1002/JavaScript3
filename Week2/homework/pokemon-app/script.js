function fetchData() {}
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => response.json())
  .then((data) => console.log(data));

const btn = document.getElementById('btn');
const select = document.getElementById('select');
