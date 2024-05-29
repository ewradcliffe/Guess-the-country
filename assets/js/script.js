/*list of countries to choose from*/
const countries = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Denmark', 'France', 'Germany', 'Greece', 'Greenland', 'Hungary', 'India', 'Indonesia', 'Italy', 'Ireland', 'Japan', 'Jordan', 'Kosovo', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malaysia', 'Mexico', 'Mongolia', 'Mozambique', 'Myanmar', 'Nepal', 'Netherlands', 'Norway', 'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Singapore', 'Slovenia', 'Somalia', 'Spain', 'Sudan', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Ukraine', 'Uganda', 'USA', 'UK', 'Venezuela', 'Vietnam', 'Zambia', 'Zimbabwe'];
let currentCountry;
let playerScore = 0;


/**Function to randomly generate a country 
 * (random selector taken from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)
**/
 function randomiseCountry() {
    randomCountry = countries[Math.floor(Math.random()*countries.length)];
    return randomCountry;    
}

/*Function to display country map */
function displayCountry () {
    randomiseCountry();
    currentCountry = randomCountry;
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

/*Function to check answer*/
function answerQuestion(playerChoice) {
    questionResult = document.getElementById('player-choice');
    if (playerChoice === currentCountry ) {
        questionResult.innerHTML = `You chose ${playerChoice} that's correct`;
        ++playerScore;
    } else {
        questionResult.innerHTML = `You chose ${playerChoice} that's wrong`;
    }
    let myScore = document.getElementById('score');
    myScore.innerHTML = `Your score is ${playerScore}`;
}

let askMeAQuestion = document.getElementById('show-me-a-country!');
askMeAQuestion.addEventListener('click', displayCountry);