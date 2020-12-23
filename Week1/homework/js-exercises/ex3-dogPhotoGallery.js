//Axios
const url = "https://dog.ceo/api/breeds/image/random";
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
