"use strict";

const hexCode = document.getElementById('hexcode');
const button = document.getElementById('button');
const body = document.body;

button.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
    hexCode.innerText = "#" + randomColor;
});