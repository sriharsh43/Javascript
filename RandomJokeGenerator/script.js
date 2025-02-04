const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async () => {
    jokeContainer.classList.remove("fade"); // Remove the fade effect 
    try {
        let response = await fetch(url);
        let data = await response.json();
        jokeContainer.textContent = `${data.joke}`;
        jokeContainer.classList.add("fade");
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

btn.addEventListener("click",getJoke);
getJoke();


//using fetch
let getJoke2 = ()=>{
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.innerHTML = `${item.joke}` // Container will display the joke
        jokeContainer.classList.add("fade") 

    })
}