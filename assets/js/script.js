/*list of countries to choose from*/
const countries = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Denmark', 'France', 'Germany', 'Greece', 'Greenland', 'Hungary', 'India', 'Indonesia', 'Italy', 'Ireland', 'Japan', 'Jordan', 'Kosovo', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malaysia', 'Mexico', 'Mongolia', 'Mozambique', 'Myanmar', 'Nepal', 'Netherlands', 'Norway', 'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Singapore', 'Slovenia', 'Somalia', 'Spain', 'Sudan', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Ukraine', 'Uganda', 'USA', 'UK', 'Venezuela', 'Vietnam', 'Zambia', 'Zimbabwe'];
const askMeAQuestion = document.getElementById('show-me-a-country');
let previousCountry = [];
let currentCountry;
let qNum;
let questionNumber = 1;
let playerScore = 0;
let bonusPointScore = 0;

/*Function to check game length. Ends after 20 goes*/
function checkGameLength() {
    if (questionNumber > 20) {
        qNum.innerHTML = `<h2 class = "game-over">Game over!</h2><p class = "game-over">You got ${playerScore} points!</p>`;
        /*Resets scores and variables & game button text.*/
        let changeButtonText = document.getElementById('show-me-a-country');
        changeButtonText.innerHTML = "Let's play!";
        collapseRules("Let's play!");
        playerScore = 0;
        let myScore = document.getElementById('score');
        myScore.innerHTML = ``;
        previousCountry = [];
        currentCountry = '';
        questionNumber = 1;
        bonusPointScore = 0;
    }
}

/**Function to randomly generate a country 
 * (random selector taken from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)
 **/
function randomiseCountry() {
    let randomCountry = countries[Math.floor(Math.random() * countries.length)];
    return randomCountry;
}

/*Function to track question number*/
function questionNumTrack() {
    qNum = document.getElementById('question-number');
    qNum.innerHTML = `<h2>Question ${questionNumber}</h2>`;
    ++questionNumber;
}

/*Function to collapse rules and display score*/
function collapseRules(buttonText) {
    let hideRules = document.getElementById('rules');
    let scoreArea = document.getElementById('score-area');
    if (buttonText === "Show me another country!") {
        hideRules.style.display = "none";
        scoreArea.style.display = "flex";
        scoreArea.innerHTML = `<p>score</p><p id='score'>${playerScore}</p>`;
    } else {
        hideRules.style.display = "block";
        scoreArea.style.display = "none";
    }
}

/*Function to change text of "let's play" button*/
function changeButton() {
    let changeButtonText = document.getElementById('show-me-a-country');
    changeButtonText.innerHTML = "Show me another country!";
    collapseRules("Show me another country!");
}

/*Function to randomise and display buttons*/
function displayButtons(currentCountry) {
    /*To get buttons*/
    /*Generates three more random countries*/
    let countryButtons = [];
    while (countryButtons.length < 3) {
        let newCountry = randomiseCountry();
        if (countryButtons.includes(newCountry) || newCountry === currentCountry) {
            continue;
        } else {
            countryButtons.push(newCountry);
        }
    }

    /*Add current country at a random location*/
    countryButtons.splice([Math.floor(Math.random() * countryButtons.length)], 0, currentCountry);

    /**Display buttons to user 
     * onclick code from https://www.geeksforgeeks.org/how-to-get-the-id-of-the-clicked-button-using-javascript-jquery/
     */
    let buttonArea = document.createElement('div');
    for (let choice in countryButtons) {
        if (countryButtons.hasOwnProperty(choice)) {
            let questionChoice = document.createElement('div');
            questionChoice.innerHTML = `<button id ="${countryButtons[choice]}" onclick = "answerQuestion(this.id)" class = "answer-button">${countryButtons[choice]}</button>`;
            buttonArea.appendChild(questionChoice);
        }
    }
    let showMap = document.getElementById('country-map');
    showMap.appendChild(buttonArea);
}

/*Function to display country map */
function displayCountry() {
    let showMap = document.getElementById('country-map');
    try {
        if (questionNumber > 20) {
            checkGameLength();
            showMap.innerHTML = ``;
        } else {
            /*Calls Question number & change button text function*/
            questionNumTrack();
            changeButton();
            /*Randomly selects a country*/
            currentCountry = randomiseCountry();

            /*Checks country hasn't been selected already*/
            while (previousCountry.includes(currentCountry)) {
                currentCountry = randomiseCountry();
            }
            previousCountry.push(currentCountry);

            /*Displays the Map Silhouette*/
            showMap.innerHTML = `<img src = "assets/images/${currentCountry.toLowerCase()}.png" alt = "Silhouette of country.">`;
            displayButtons(currentCountry);
        }
    } catch (err) {
        showMap.innerHTML = "Error. Please refresh the page.";
    }
}

/*Function to add bonus points */
function bonusPoints(bonus) {
    if (bonus) {
        ++bonusPointScore;
    } else {
        bonusPointScore = 0;
    }

    if (bonusPointScore === 5) {
        playerScore += 3;
        bonusPointScore = 0;
        let bonusDisplay = document.getElementById('country-map');
        bonusDisplay.innerHTML = `<i class="fa-solid fa-check"></i> <p id = "bonus-points">Five in a row.\nYou get bonus points!!\nGreat effort!!</p>`;
    }
}

/*Function to check answer & increment score*/
function answerQuestion(playerChoice) {
    let questionResult = document.getElementById('country-map');
    if (playerChoice === currentCountry) {
        questionResult.innerHTML = `<p id = "player-choice">${playerChoice}</p><i class="fa-solid fa-check"></i>`;
        questionResult.style.color = 'green';
        ++playerScore;
        bonusPoints(true);
    } else {
        questionResult.innerHTML = `<p id = "player-choice">${playerChoice}</p><i class="fa-solid fa-xmark"></i>`;
        questionResult.style.color = 'red';
        bonusPoints(false);
    }
    let myScore = document.getElementById('score');
    myScore.innerHTML = `${playerScore}`;
    /*Function which checks if 20 turns taken.*/
    checkGameLength();
}

/*Event Listener to display map and option buttons*/
askMeAQuestion.addEventListener('click', displayCountry);