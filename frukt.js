"use strict";

let name = prompt("Введите ваш имя");

const gameContainer = document.getElementById('game-container');

const basket = document.getElementById('basket');

document.addEventListener('keydown', function (event){
   const currentPosition = parseInt(basket.style.left)

    if (event.key === "ArrowLeft"){
        if (currentPosition > 0){
            basket.style.left = (currentPosition - 10) + 'px';
        }
    } else if (event.key === "ArrowRight"){
        if (currentPosition > 350){
            basket.style.left = (currentPosition + 10) + 'px';
        }
    }
});


function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}
function createFruit() {
    const fruit = document.createElement('div');
    fruit.className = 'fruit';
    fruit.style.background = 'red';
    fruit.style.left = getRandomNumber(0, 370) + 'px';
    fruit.style.top = '-30px'
    document.getElementById('game-container').appendChild(fruit)
    return createFruit();
}





