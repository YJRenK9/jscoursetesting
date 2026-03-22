const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

// reference for start button
const startbtn = document.getElementById('startbtn');
// reference for the container used to display the cards
const gameContainer = document.getElementById('game-container');
// reference for the score
const scoreElement = document.getElementById('score');
// reference for the timer
const timerElement = document.getElementById('timer');

startbtn.addEventListener('click', startGame);


function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        // give the div the card class
        card.classList.add('card');
        // dataset is the collection of attributes of an HTML element 
        card.dataset.color = color; // give color
        card.textContext = '?'; // ? is what the user will see
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // gets a random number within 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // swaps array[i] with array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    const card = event.target;
    // do nothing if the card isn't a card OR the card is already matched
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    // display the card's color to the user
    card.textContent = card.dataset.color;
    // update the card's background color with the provided color
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

