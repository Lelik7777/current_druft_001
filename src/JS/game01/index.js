let $startBut = document.querySelector('#start');
let $gameDiv = document.querySelector('#game');
let $timeSpan = document.querySelector('#time');
let $timeHeader = document.querySelector('#time-header');
let $resultHeader = document.querySelector('#result-header');
let $resultSpan = document.querySelector('#result');
let $gameTimeInput = document.querySelector('#game-time')
let score = 0;
let count = 0;

$startBut.addEventListener('click', startGame);
$gameDiv.addEventListener('click', function (ev) {

    if (ev.target.dataset.is) {
        createBox();
        score++;
    }
});
$gameTimeInput.addEventListener('input', function (ev) {
    $timeSpan.textContent = ev.target.value.toString();
    console.log('change value in input and  value input 1 =' + $gameTimeInput.value)

});

function hideElement(el) {
    el.classList.add('hide');
}

function appearElement(el) {
    el.classList.remove('hide');
}

function createStyleElem(el, attribute, value) {
    el.style[attribute] = value;
}

function changeColorElem(el, color) {
    el.style.backgroundColor = color;
}

function randomValue(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function createBox() {
    $gameDiv.innerHTML = '';
    let box = document.createElement('div');
    let sizeBox = randomValue(40, 90);
    let maxTop = +($gameDiv.getBoundingClientRect().height - sizeBox);
    let maxLeft = +($gameDiv.getBoundingClientRect().width - sizeBox);
    box.style.width = box.style.height = sizeBox + 'px';
    changeColorElem(box, '#000');
    $gameDiv.insertAdjacentElement('afterbegin', box);
    createStyleElem(box, 'position', 'absolute');
    createStyleElem(box, 'top', (randomValue(0, maxTop) + 'px'));
    createStyleElem(box, 'left', (randomValue(0, maxLeft) + 'px'));
    createStyleElem(box, 'cursor', 'pointer');
    box.dataset.is = 'true';

}

function endGame() {
    $gameDiv.innerHTML = '';
    $gameTimeInput.removeAttribute('disabled');
    hideElement($timeHeader);
    appearElement($resultHeader);
    $resultSpan.textContent = score.toString();
    changeColorElem($gameDiv, '#ccc');
    appearElement($startBut);
    count++;
    $timeSpan.textContent = $gameTimeInput.value.toString();//!!!
    console.log('end run and value in span = ' + $timeSpan.textContent);
    console.log('end run and value input 2 =' + $gameTimeInput.value);
    console.log('conunt = ' + count);
}

function startGame() {
     score=0;
    console.log(score)
    $gameTimeInput.setAttribute('disabled', 'true');
    hideElement($startBut);
    hideElement($resultHeader);
    appearElement($timeHeader);
    changeColorElem($gameDiv, '#fff');
    createBox();
    let interval = setInterval(function () {
        let time = parseFloat($timeSpan.textContent);
        if (time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $timeSpan.textContent = (time - 0.1).toFixed(1).toString();

        }
    }, 100);

    console.log('start run and value in span= ' + $timeSpan.textContent)
    //clearInterval(interval);
}



