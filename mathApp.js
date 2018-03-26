var button = document.getElementById('solve');

function changeElementClass(id, className){
    var el = document.getElementById(id);
    el.className = className;
}

function solve() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result1 = (((-1 * b) + Math.sqrt((Math.pow(b, 2)) - (4 * a * c))) / (2 * a));
    var result2 = (((-1 * b) - Math.sqrt((Math.pow(b, 2)) - (4 * a * c))) / (2 * a));

    if (isNaN(a)||isNaN(b)||isNaN(c) == 'true' || a==0) {
        changeElementClass("solutions", "invalid");
        return "You entered an incorrect value for either A, B, or C. Please try again.";
    } else if (((Math.pow(b, 2)) - (4 * a * c)) < 0) {
        changeElementClass("solutions", "noreal");
        return "There are no real solutions."
    } else {
        changeElementClass("solutions", "real");
        return "The roots to the quadratic are " + result1 + " and " + result2 + ".";
    }
}


function displayAnswer() {
    var result = solve();
    return document.getElementById('solutions').textContent = result;
}

button.addEventListener('click', displayAnswer);
