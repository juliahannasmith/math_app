var button = document.getElementById('solve')
function solve() {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var result1 = ((-1 * b) + Math.sqrt((Math.pow(b, 2)) - (4 * a * c)) / (2 * a));
    var result2 = ((-1 * b) - Math.sqrt((Math.pow(b, 2)) - (4 * a * c)) / (2 * a));

}

function displayAnswer(){
    var answer = result1 + result2
    return answer
}

button.addEventListener('click', displayAnswer)

