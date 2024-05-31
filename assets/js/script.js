/*list of countries to choose from*/
const countries = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Denmark', 'France', 'Germany', 'Greece', 'Greenland', 'Hungary', 'India', 'Indonesia', 'Italy', 'Ireland', 'Japan', 'Jordan', 'Kosovo', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malaysia', 'Mexico', 'Mongolia', 'Mozambique', 'Myanmar', 'Nepal', 'Netherlands', 'Norway', 'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Singapore', 'Slovenia', 'Somalia', 'Spain', 'Sudan', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Ukraine', 'Uganda', 'USA', 'UK', 'Venezuela', 'Vietnam', 'Zambia', 'Zimbabwe'];
let previousCountry = [];
let currentCountry;
let questionNumber = 1;
let playerScore = 0;
let bonusPointScore = 0;


/**Function to randomly generate a country 
 * (random selector taken from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)
**/
 function randomiseCountry() {
    randomCountry = countries[Math.floor(Math.random()*countries.length)];
    return randomCountry;    
}

/*Function to track question number*/
function questionNumTrack() {
    qNum = document.getElementById('question-number');
    qNum.innerHTML = `<h2>Question ${questionNumber}</h2>`;
    ++questionNumber;
}

/*Function to display country map */
function displayCountry () {
    /*Calls Question number function*/
    questionNumTrack()
    /*Randomly selects a country*/
    currentCountry = randomiseCountry();
   
    /*Checks country hasn't been selected already*/
    while (previousCountry.includes(currentCountry)) {
        currentCountry = randomiseCountry();
    } 
    previousCountry.push(currentCountry);

    /*Displays the Map Silhouette*/
    let showMap = document.getElementById('country-map');
    showMap.innerHTML = `<img src = "assets/images/${currentCountry.toLowerCase()}.png" alt = "Silhouette of country.">`;
    
    /*To get buttons*/
    /*Generates three more random countries*/
    let countryButtons = [];
    while (countryButtons.length < 3) {
        randomiseCountry()
        newCountry = randomCountry;
        if (countryButtons.includes(newCountry) || newCountry === currentCountry ) {
            continue
        } else {
            countryButtons.push(newCountry);
        }
    }    

    /*Add current country at a random location*/
    countryButtons.splice([Math.floor(Math.random()*countryButtons.length)], 0, currentCountry);

    /*Display buttons to user*/
    let buttonArea = document.createElement('div');
    for (choice in countryButtons) {
        let questionChoice = document.createElement('div');
        questionChoice.innerHTML = `<button id ="${countryButtons[choice]}" onclick = "answerQuestion(this.id)" class = "answer-button">${countryButtons[choice]}</button>`;
        buttonArea.appendChild(questionChoice);
    }
    showMap.appendChild(buttonArea);
}


/*Function to add bonus points */
function bonusPoints(bonus) {
    if (bonus === 'yes') {
        ++bonusPointScore;
    } else {
        bonusPointScore = 0;
    }
    
     if (bonusPointScore < 5) {
        console.log('you got this far', bonusPointScore);
    } else {
        playerScore += 3;
        console.log('you got bonus points', bonusPointScore);
        bonusPointScore = 0;
    } 
}

/*Function to check answer*/
function answerQuestion(playerChoice) {
    questionResult = document.getElementById('country-map');
    if (playerChoice === currentCountry ) {
        questionResult.innerHTML = `${playerChoice} <i class="fa-solid fa-check"></i>`;
        questionResult.style.color = 'green';
        ++playerScore;
        bonusPoints('yes'); 
    } else {
        questionResult.innerHTML = `${playerChoice} <i class="fa-solid fa-xmark"></i>`;
        questionResult.style.color = 'red';
        bonusPoints('no');
    }
    let myScore = document.getElementById('score');
    myScore.innerHTML = `Your score is ${playerScore}`;
}


let askMeAQuestion = document.getElementById('show-me-a-country');
askMeAQuestion.addEventListener('click', displayCountry);