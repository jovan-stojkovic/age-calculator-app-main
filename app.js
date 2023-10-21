const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    console.log(day.value);
    e.preventDefault()
})
