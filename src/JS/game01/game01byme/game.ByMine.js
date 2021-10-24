let $startBut = document.querySelector('.button-start');
let $time = document.querySelector('.time');
let $result = document.querySelector('.result');
let $game = document.querySelector('.game');
let $headerTime = document.querySelector('.header-time');
let $headerResult = document.querySelector('.header-result');
let $timeInput = document.querySelector('#time-game');
let score = 0;
let interval;
let colors = ['red', 'blue', 'pink', 'grey', 'orange', 'lime', 'black', 'navy', 'purple'];

$startBut.addEventListener('click', startGame);
$game.addEventListener('click', function (ev) {
    if (ev.target.dataset.isBox) {
        createBox();
        score++;
    }
});
$timeInput.addEventListener('input', function (ev) {
    $time.textContent = ev.target.value + '.0';
    console.log(ev.target.value);
    hideElem($headerResult);
    appearElem($headerTime);
})

function hideElem(el) {
    el.classList.add('hide');
}

function appearElem(el) {
    el.classList.remove('hide');
}

function changeColorElem(el, color) {
    el.style.backgroundColor = color;
}

function getRandomColor(colors) {
    let index = getRandomValue(0, colors.length);
    if (index < 0 || index > colors.length - 1)
        index = colors[0];
    return colors[index];
}

function getRandomValue(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function createBox() {
    $game.innerHTML = '';
    let $box = document.createElement('div');
    let sizeBox = getRandomValue(30, 80);
    let maxLeft = $game.getBoundingClientRect().width - sizeBox - 5;
    let maxTop = $game.getBoundingClientRect().height - sizeBox - 5;
    $box.style.width = $box.style.height = sizeBox + 'px';
    changeColorElem($box, getRandomColor(colors));
    $box.style.position = 'absolute';
    $box.style.top = getRandomValue(0, maxTop) + 'px';
    $box.style.left = getRandomValue(0, maxLeft) + 'px';
    $game.insertAdjacentElement('afterbegin', $box);
    $box.dataset.isBox = 'true';
    $box.style.cursor = 'pointer';
}

function endGame() {
    $timeInput.removeAttribute('disabled');
    hideElem($headerTime);
    appearElem($headerResult);
    $result.textContent = score.toString();
    changeColorElem($game,'#ccc');
    $game.innerHTML='';
    appearElem($startBut);
    $time.textContent=$timeInput.value;

}

function startGame() {
    score = 0;
    hideElem($startBut);
    hideElem($headerResult);
    appearElem($headerTime);
    changeColorElem($game, '#fff');
    createBox();
    interval = setInterval(function () {
        let time = parseFloat($time.textContent);
        if (time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $time.textContent = (time - 0.1).toFixed(1).toString();
        }
    }, 100);
    $timeInput.setAttribute('disabled', 'true');
}

