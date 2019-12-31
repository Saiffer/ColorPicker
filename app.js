/* jshint esversion: 6 */
let a, b, c;

function clickButton() {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    console.log(first, second,third);
    return [first,second,third];
}

function getColorValue() {
    let values = clickButton();
    let rgb = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
    console.log(rgb);
    return rgb;
}


let buttonClick = document.querySelector('.submit');



function appendColor() {
    let rgb = getColorValue();
    document.querySelector('.color-box').style.backgroundColor = rgb;

}

buttonClick.addEventListener('click', appendColor, true);