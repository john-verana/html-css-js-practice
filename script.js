const btn = document.getElementById('joinBtn');

btn.addEventListener('click', () => {
    if (btn.textContent === 'Join') {
        btn.textContent = "Cancel";
        btn.style.backgroundColor = 'tomato';
    } else {
        btn.textContent = "Join";
        btn.style.backgroundColor = 'cornflowerblue';
    }
});