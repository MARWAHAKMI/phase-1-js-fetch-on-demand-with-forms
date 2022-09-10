const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        console.log(input.value);
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');
                title.innerText = data[input.value - 1].title;
                summary.innerText = data[input.value - 1].summary;
            });
    });
}

document.addEventListener('DOMContentLoaded', init);