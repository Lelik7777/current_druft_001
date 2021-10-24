const gameTime$ = document.querySelector('.game-time');
const gameResult$ = document.querySelector('.game-result');
const time$ = document.querySelector('.time');
const result$ = document.querySelector('.result');
const start$ = document.querySelector('.start');
const game$ = document.querySelector('.game');
const timeInput$ = document.querySelector('.time-input');
let interval;
let counter = 0;

start$.addEventListener('click', function () {
    getStyleEl(game$, 'backgroundColor', '#FFF');
    hideEl(start$);
    gameStart();
    interval = setInterval(function () {
        let time = parseFloat(time$.textContent);
        if (time <= 0) {
            gameOver();
            clearInterval(interval);
            return;
        }

        time$.textContent = (time - 0.1).toFixed(1);
    }, 100);
});
game$.addEventListener('click', function (ev) {
    if (ev.target.dataset.box == 'true') {
        gameStart();
        counter++;
    }
});
timeInput$.addEventListener('input', function (ev) {
    time$.textContent = ev.target.value;
});

function hideEl(el) {
    el.classList.add('hide');
}

function appearEl(el) {
    el.classList.remove('hide');
}

function getStyleEl(el, property, value) {
    el.style[property] = value;
}

function gameStart() {
    game$.innerHTML = '';
    createRectangle();
    hideEl(gameResult$);
    appearEl(gameTime$);
}

function gameOver() {
    result$.textContent = counter.toString();
    console.log(result$.textContent);
    hideEl(gameTime$);
    appearEl(gameResult$);
    game$.innerHTML = '';
    getStyleEl(game$, 'backgroundColor', '#31b0d5');
    appearEl(start$);
    time$.textContent = timeInput$.value;
    counter = 0;
}

function randomColor() {
    let colors = ['#E32636', '#CD9575', '#44944A', '#FAE7B5', '#79553D', '#003153', '#98FB98', '#FFDC33', '#4285B4', '#B00000', '#FFCF48'];
    let color = getRandomValue(0, colors.length);
    return colors[color];
}

function createRectangle() {
//debugger;
    const box$ = document.createElement('div');
    let randomSizeBox = getRandomValue(40, 90);
    getStyleEl(box$, 'width', randomSizeBox + 'px');
    getStyleEl(box$, 'height', randomSizeBox + 'px');
    getStyleEl(box$, 'backgroundColor', `${randomColor()}`);
    getStyleEl(box$, 'position', 'absolute');
    let top = getRandomValue(0, (Math.floor(game$.getBoundingClientRect().height) - randomSizeBox));
    let left = getRandomValue(0, (Math.floor(game$.getBoundingClientRect().width) - randomSizeBox));
    getStyleEl(box$, 'top', `${top}px`);
    getStyleEl(box$, 'left', `${left}px`);
    game$.insertAdjacentElement('afterbegin', box$);
    box$.dataset.box = 'true';
}

function getRandomValue(min, max) {
    return Math.trunc(Math.random() * (min + max) + min);
}


