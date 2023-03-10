let btn = document.querySelector(".generator__btn");
let res = document.querySelector('.result__text');
let input = document.querySelector('.input');
btn.addEventListener('click', generateArray);

function generateArray() {
    let reg = /^\d+$/;
    if (reg.test(input.value) && +input.value > 0) {
        let length = +input.value;
        let array = new Array(length).fill();
        let result = array.map(() => Math.floor(Math.random() * length) + 1);
        res.innerHTML = convertToString(result)
    } else {
        alert("Please enter a positive integer!");
    }
}

function convertToString(array) {
    return "[" + array.join(", ") + "]"
}