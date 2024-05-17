const btnEl = document.getElementById('jokebtn');
const jokeEl = document.getElementById('joke');

btnEl.addEventListener('click', getJoke);

async function getJoke() {
    try{
        jokeEl.innerText = 'Loading...'
        const url = 'http://localhost:3000/joke';
        const response = await(fetch(url));
        const jokes = await response.json();
        jokeEl.innerText = jokes[0].joke;
    } catch(error)
    {
        jokeEl.innerText = `${error.message}. Please try again later...`;
    }    
}
