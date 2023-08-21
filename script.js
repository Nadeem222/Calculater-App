let input = document.querySelector("input");
let buttons = document.querySelectorAll('button');
let resultInput = document.querySelector(".result-input");

let string = "";
let arr = Array.from(buttons);

arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            let result = eval(string);
            resultInput.value = result;
        }
        else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
            resultInput.value = "";
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML === '%') {
            string = eval(string) / 100;
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})