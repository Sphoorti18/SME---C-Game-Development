// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');
    var playButton = document.getElementById('playButton');
    var introSection = document.getElementById('intro');
    var lessonSection = document.getElementById('lesson');

    startButton.addEventListener('click', function () {
        introSection.style.display = 'none';
        lessonSection.style.display = 'block';
    });

    playButton.addEventListener('click', function () {
        alert('Let\'s play the DSA game!');
        // Add game logic here
    });
});
