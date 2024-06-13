## Objectives
The objective was to design an interactive online quiz to demonstrate ability with HTML, CSS and Javasript. The Quiz should be intuative and offer a high level of interactivity.
I will create a multiple choice quiz which displays the sillouttes of a country and offer the user a choice of four answers. Points will be awarded for correct answers. To add interest, bonus points will be awarded for getting five correct consecutive answers. The player will have 20 turns to score as many questiona as they can.

## Scope
The quiz will focus on asking questions related to country sillouttes. This focus will help give it a strong identity with the objective of distingushing it from other quizzes.

## Structure
The quiz will be on a single page for simplicity. I will try and structure it to minimise scrolling. I will prioritise mobile design as I expect most users to use it to pass time while on the go. A silloutte of the country will be displayed to the user. Appropriately titled buttons will allow the user to interact with the quiz in an intuative and tactile way. I will use buttons as this will support users with touchscreens and prevent issues with people entring correct, but icorrectly spelled answers.

## Skeleton
Wireframe

## Surface
I will keep the appearence of the quiz simple, with bold colours. When the user answers a question I will provide feedback in with a green tick or a red cross to support intuative interaction. 

## The final site
### Testing

A bug was found whereby the "Show me another country" button would increment the score, but not trigger the function ending the game after 20 turns. This allowed players on the 20th question to click the button multiple times and be re-asked the question, meaning they could wait until a question they could answer came up. This could lead to crashing the game if the player clicked the button until all maps had been displayed, and also makes the programme seem incomplete. I corrected this by adding code to automatically end the game once the question tracker reached 21.

#### Manual user testing

### Validation
#### W3
#### Css
#### Javascript
#### Lighthouse

## Deployment
The application was created on Gitpod using The Code Institute template (https://github.com/Code-Institute-Org/gitpod-full-template) and VS Code Plugin and deployed to Github with the following steps:
Login to Github, otherwise create an account.
Navigate to the repository ('Explore -> 'ewradcliffe/Guess-the-country') or follow the link (https://github.com/ewradcliffe/Guess-the-country).
Once in the repository navigate to the 'Settings' tab.
Navigate to the 'Pages' section, select the branch to deploy and save the changes.
The link to website is https://ewradcliffe.github.io/Guess-the-country/

Please note that to save any changes, please save as usual, then 'git add .' followed by 'git commit -m "summerise changes." followed by 'git push' to push changes to github.

## Credits
Random number selector taken from https://www.geeksforgeeks.org how-to-select-a-random-element-from-array-in-javascript/
Fonts from https://fonts.google.com/
Tick and cross from https://fontawesome.com/
Country sillouttes from https://silhouettegarden.com/category/country/
Favicon generated by Favicon generator https://www.favicon-generator.org/ 
Header background from https://www.pexels.com/

Code for onclick Display Buttons in https://www.geeksforgeeks.org/how-to-get-the-id-of-the-clicked-button-using-javascript-jquery/


