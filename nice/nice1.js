document.body.style.cursor = 'pointer'

//create a function that generates a random color
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

window.addEventListener('mouseover', function(e) {
    e.preventDefault();
    e.target.style.outline = `${randomColor()} 2px solid`;
});

window.addEventListener('mouseleave', function(e) {
    e.preventDefault();
    e.target.style.outline = `none`; 
});
