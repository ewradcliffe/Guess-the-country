/*list of countries to choose from*/
const countries = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Denmark', 'France', 'Germany', 'Greece', 'Greenland', 'Hungary', 'India', 'Indonesia', 'Italy', 'Ireland', 'Japan', 'Jordan', 'Kosovo', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malaysia', 'Mexico', 'Mongolia', 'Mozambique', 'Myanmar', 'Nepal', 'Netherlands', 'Norway', 'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Singapore', 'Slovenia', 'Somalia', 'Spain', 'Sudan', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Ukraine', 'Uganda', 'USA', 'UK', 'Venezuela', 'Vietnam', 'Zambia', 'Zimbabwe'];
let currentCountry;


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
    countryButtons = [randomiseCountry(), randomiseCountry(), randomiseCountry()];
    console.log(currentCountry);

    /*Add current country at a random location*/
    countryButtons.splice([Math.floor(Math.random()*countryButtons.length)], 0, currentCountry);
    console.log(countryButtons);
}



let askMeAQuestion = document.getElementById('show-me-a-country!');
askMeAQuestion.addEventListener('click', displayCountry);