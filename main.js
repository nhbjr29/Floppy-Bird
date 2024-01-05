var block = document.getElementById("BLOCK");
var hole = document.getElementById("HOLE");

hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
});