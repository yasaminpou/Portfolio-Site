console.log("It is lovely to have you here");
https://code.jquery.com/jquery-3.6.0.min.js
function menuToggle () {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}