const jokeText = document.querySelector('.heading-1');

async function getJoke(){

    try{
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        const dataJoke = await res.json();
        const status = dataJoke.status;
        const error =`😞 Sorry, we couldn't give you a joke in this moment, please try again later.`

        if (status === 404) throw error;

        jokeText.textContent = dataJoke.value;

    } catch(err) {
        jokeText.textContent = err;
    }
    
}

