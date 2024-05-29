/*list of countries to choose from*/
const countries = ['Austria', 'Belgium', 'Bulgaria', 'Cyprus', 'Denmark', 'France', 'Germany', 'Greece', 'Greenland', 'Hungary', 'India', 'Indonesia', 'Italy', 'Ireland', 'Japan', 'Jordan', 'Kosovo', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malaysia', 'Mexico', 'Mongolia', 'Mozambique', 'Myanmar', 'Nepal', 'Netherlands', 'Norway', 'Pakistan', 'Panama', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Singapore', 'Slovenia', 'Somalia', 'Spain', 'Sudan', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Ukraine', 'Uganda', 'USA', 'UK', 'Venezuela', 'Vietnam', 'Zambia', 'Zimbabwe'];

/**Function to randomly generate a country 
 * (random selector taken from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/)
**/
 function randomiseCountry() {
    randomCountry = countries[Math.floor(Math.random()*countries.length)];
    console.log(randomCountry)
}

randomiseCountry()