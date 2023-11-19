document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector('.menu-icon');
    var navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    navbar.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            navbar.classList.remove('show');
        }
    });
});