//XMLHttpRequest
const xhr = new XMLHttpRequest();
const url = (xhr.onload = function () {
  JSON.parse(xhr.requestResponseText);
  console.log();
});

xhr.open('GET', url);


//Axios
const url = "https://www.randomuser.me/api";
Axios.get(url);

.then(function(response){
    console.log(response)
})

.catch(function(error){
    console.log(error)
})

.finally(function(){
    console.log("All done!")
})

