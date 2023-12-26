const buttons = document.querySelector('.buttons');
const navList = document.querySelector('.navbar .menu-list');

buttons.addEventListener('click', () => {
    buttons.classList.toggle('active');
    navList.classList.toggle('active');
});