const b1Button = document.querySelector('#b1Button');
const b2Button = document.querySelector('#b2Button');
const resetButton = document.querySelector('#reset');
const b1Display = document.querySelector('#b1Display');
const b2Display = document.querySelector('#b2Display');
const winningScoreSelect = document.querySelector('#playto');

let b1Score = 0;
let b2Score = 0;
let winningScore = 3;
let isGameOver = false;

b1Button.addEventListener('click', function () {
    if (!isGameOver) {
        b1Score += 1;
        if (b1Score === winningScore) {
            isGameOver = true;
            b1Display.classList.add('has-text-success');
            b2Display.classList.add('has-text-danger');
            b1Button.disabled = true;
            b2Button.disabled = true;


        }
        b1Display.textContent = b1Score;
    }

})

b2Button.addEventListener('click', function () {
    if (!isGameOver) {
        b2Score += 1;
        if (b2Score === winningScore) {
            isGameOver = true;
            b2Display.classList.add('has-text-success');
            b1Display.classList.add('has-text-danger');
            b1Button.disabled = true;
            b2Button.disabled = true;


        }
    }
    b2Display.textContent = b2Score;
})

winningScoreSelect.addEventListener('click', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    b1Score = 0;
    b2Score = 0;
    b1Display.textContent = 0;
    b2Display.textContent = 0;
    b1Display.classList.remove('has-text-success', 'has-text-danger');
    b2Display.classList.remove('has-text-success', 'has-text-danger');
    b1Button.disabled = false;
    b2Button.disabled = false;


}





