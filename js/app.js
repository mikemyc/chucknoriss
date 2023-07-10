const main = document.getElementById("main");
const body = document.getElementById("body");
const joke=document.getElementById("joke");


const generateJoke=()=>{
    fetch("https://api.chucknorris.io/jokes/random").then(function (response) {
        response.json().then(function (data) {
          console.log(data);
          console.log(data.value);
          joke.innerHTML=`
          <p>${data.value}</p>
          <p>${data.created_at}</p>
          `
          
        });
      });
}
button.addEventListener("click", function () {
generateJoke() 
});

document.addEventListener("DOMContentLoaded", function(){
   generateJoke()
})