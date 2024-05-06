// main.js

document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        section.addEventListener('click', function () {
            alert('You clicked on ' + section.querySelector('h2').textContent);
        });
    });
});
