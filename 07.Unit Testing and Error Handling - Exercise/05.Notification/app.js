function notify(message) {
    const divElement = document.getElementById('notification');
    divElement.addEventListener('click', (e) => e.target.style.display = 'none');
    divElement.textContent = message;
    divElement.style.display = 'block';
}