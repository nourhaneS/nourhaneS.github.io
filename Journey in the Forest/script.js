document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('forest-sound');
    audio.play();

    setTimeout(function() {
        document.body.style.backgroundImage = 'url("noon_forest.jpg")';
    }, 60000); // switch to noon image after 1 minute

    setTimeout(function() {
        document.body.style.backgroundImage = 'url("night_forest.jpg")';
    }, 120000); // switch to night image after 2 minutes
});