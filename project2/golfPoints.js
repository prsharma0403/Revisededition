
function golfshotsName(strokes, par) {
if (strokes == 1) {
return "Hole in One";
} else if (strokes <= par - 2) {
return "Eagle";
} else if (strokes == par - 1) {
return "Birdie";
} else if (strokes == par) {
return "Par";
} else if (strokes == (par + 1)) {
return "Bogey";
} else if (strokes == (par + 2)) {
return "DoubleBogey";
} else if (strokes >= (par + 3)) {
return "Go to Home";
}
}


var result = golfshotsName(1, 3);
window.alert(result)
