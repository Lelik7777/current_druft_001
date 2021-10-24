let $button = document.querySelector('.button');
let $headerTime = document.querySelector('.header-time');
let $headerResult = document.querySelector('.header-result');
let $game = document.querySelector('.game');
let $time = document.querySelector('.time');
let $result = document.querySelector('.result');
let $input = document.querySelector('#input-time');
let score = 0;
let internal;
let colors=['red','orange','blue','purple','yellow','green','grey'];

$button.addEventListener('click', startGame);
$game.addEventListener('click', function (ev) {
    if (ev.target.dataset.is) {
        score++;
        createBox();
    }
});
$input.addEventListener('input', function (ev) {
    $time.textContent = ev.target.value + '.0';
    hideElem($headerResult);
    showElem($headerTime);
})

function hideElem(el) {
    el.classList.add('hide');
}

function showElem(el) {
    el.classList.remove('hide');
}

function changeStyleElem(el, style, value) {
    el.style[style] = value;
}

function endGame() {
    hideElem($headerTime);
    showElem($headerResult);
    $input.removeAttribute('disabled');
    changeStyleElem($game,'backgroundColor','#ccc');
    $game.innerHTML='';
    showElem($button);
    $result.textContent=score.toString();
    $time.textContent=$input.value;
}

function startGame() {
    score=0;
    hideElem($button);
    showElem($headerTime);
    hideElem($headerResult);
    changeStyleElem($game, 'backgroundColor', '#fff');
    createBox();
    internal = setInterval(function () {
        let time = parseFloat($time.textContent);
        if (time <= 0) {
            clearInterval(internal);
            endGame();
        } else {
            $time.textContent = (time - 0.1).toFixed(1).toString();
        }
    }, 100);
    $input.setAttribute('disabled', 'true');
    hideElem($headerResult);
}

function randomValue(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function createBox() {
    $game.innerHTML = '';
    let $box = document.createElement('div');
    let sizeBox = randomValue(30, 100);
    let color=colors[randomValue(0,7)];
    console.log(randomValue(0,7));
    let maxTop = $game.getBoundingClientRect().height - sizeBox;
    let maxLeft = $game.getBoundingClientRect().width - sizeBox;
    changeStyleElem($box, 'width', sizeBox + 'px');
    changeStyleElem($box, 'height', sizeBox + 'px');
    changeStyleElem($box, 'backgroundColor', color);
    $game.insertAdjacentElement('afterbegin', $box);
    changeStyleElem($box, 'position', 'absolute');
    changeStyleElem($box, 'top', randomValue(0, maxTop) + 'px');
    changeStyleElem($box, 'left', randomValue(0, maxLeft) + 'px');
    $box.dataset.is = 'true';
}