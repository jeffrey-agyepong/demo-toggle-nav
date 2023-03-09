const btn = document.querySelector('.toggle-btn');
btn.addEventListener('click', function () {
    const navEl = document.querySelector('nav');
    navEl.classList.toggle('show-nav');
});