window.onload = function () {

    const button = document.getElementById('dice__container');
    const adviceId = document.getElementById('advice-id');
    const adviceText = document.getElementById('advice-text');
    button.addEventListener('click', fetchResource);

    function fetchResource() { 
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
        adviceId.innerText = "Advice #" + data.slip.id; //slip.id e slip.advice li ho presi dall'API
        adviceText.innerText = '"' + data.slip.advice + '"';
        });
    }
    fetchResource();
}