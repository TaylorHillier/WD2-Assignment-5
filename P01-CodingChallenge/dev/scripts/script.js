// Write your JavaScript here...
$(document).ready(function () {
    $('.hamburgerMenu').on('click', function () {
        $('#openBurgerMenu').toggleClass("hidden");
        console.log("clicked");
    });

});
