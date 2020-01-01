/* jshint esversion: 6 */

function clickButton() {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    return [first,second,third];
}

function getColorValue() {
    let values = clickButton();
    let rgb = `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
    return rgb;
}

function appendColor() {
    let rgb = getColorValue();
    document.querySelector('.color-box').style.backgroundColor = rgb;
}

let buttonClick = document.querySelector('.submit');
buttonClick.addEventListener('click', appendColor, true);