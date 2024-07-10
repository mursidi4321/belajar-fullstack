const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');


const addJokes = async () => {
    const textJokes = await getJokes();
    const newLi = document.createElement('li');
    newLi.append(textJokes);
    jokes.append(newLi);
}

const getJokes = async () => {
    try {
        const config = {
            headers: {
                accept : 'application/json',
            }
        };
         const req = await axios.get('https://icanhazdadjoke.com/', config)
         return req.data.joke;
    } catch (error) {
        return `Error ${error}`;
    }
    
};


button.addEventListener('click', function(){
    addJokes();
})



