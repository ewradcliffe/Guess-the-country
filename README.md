# Guess the country project ReadMe

## Objectives
The objective was to design an interactive quiz using HTML, CSS and JavaScript. The quiz should maximise user experience utilising principals of intuitive design and accessibility.

## Scope
I will create a quiz to test users geographical knowledge. Given the popularity of sites such as Geoguessr I expect a site of this nature to be popular with users.

The quiz will display silhouettes of countries and users offered a choice of four answers. Points will be awarded for correct answers, with the chance to earn more points for consecutive correct answers. Users will have 20 turns to get as many points as possible, after which the quiz will end and reset to the beginning/

In offering a narrow focus I aim to give the quiz a distinct identity and differentiate it from competitors and build popularity with users.

## Structure
The quiz will be on a single page for simplicity. I will try and structure it to minimise scrolling. I will prioritise mobile design as I expect most users to use it to pass time while on the go. A silhouette of the country will be displayed to the user. Appropriately titled buttons will allow the user to interact with the quiz in an intuitive and tactile way. I will use buttons as this will support users with touchscreens and prevent issues with people entering correct, but incorrectly spelled answers.

## Skeleton
#### Wireframe
I drafted the below wireframes for the appearance of the site. Note that the view is slightly different from the finished version. After some testing I swapped the answer buttons and 'show me another country buttons' around to show the answer buttons first. The reasons are fully explained in the testing section below, but the change improves user experience.

![Wireframe of the mobile site.](assets/images/mobilewireframe.jpeg)
![Wireframe of the full screen site](assets/images/fullscreenwireframe.jpeg)
## Surface
To build a strong identity and maximise user experience I have chosen a simple yet striking design. A deep blue header with a white cursive font contrasting with a white background with blue and black design and a sans-serif font in the body. A background image of the globe at night was used to support the identity of a geography quiz, whilst a plain background was used in the main body for clarity and not to distract from the quiz itself.

Intuitive result feedback is supported by green or red colouring and the use of tick or cross icons.

## The final site
This is the initial view of the final site on mobile. <br />
![Screenshot of view one of the mobile site.](assets/images/mobileviewone.png)

This is the view of the above once the 'let's play button' is clicked. <br />
![Screenshot of view two of the mobile site.](assets/images/mobileviewtwo.png)

This is the initial view on a large screen.
![Screenshot of view one of the large screen site.](assets/images/fullscreenviewone.png)

This is the view of the above when the 'let's play' button is clicked.
![Screenshot of view two of the large screen site.](assets/images/fullscreenviewtwo.png)

### Testing
#### Manual user testing
A bug was found whereby the "Show me another country" button would increment the score, but not trigger the function ending the game after 20 turns. This allowed players on the 20th question to click the button multiple times and be re-asked the question, meaning they could wait until a question they could answer came up. This could lead to crashing the game if the player clicked the button until all maps had been displayed, and also makes the programme seem incomplete. I corrected this by adding code to automatically end the game once the question tracker reached 21.

In the earlier versions of the site, the answer select buttons appeared at the bottom of the page. This meant that on some screens some or all of the buttons were cut off at the bottom, necessitating scrolling. In the worst cases the third or fourth button (which had the correct answer) was cut off. This caused confusion as it was not obvious the user needed to scroll. Some restyling of padding and margins helped, however shrinking the size of the elements too much would also decrease user experience. In the end, I created space by moving the 'Show me another country' to the bottom, as it is less important when the answer select buttons are visible.

### Validation
#### HTML
The HTML was tested with the [w3 validator](https://validator.w3.org/nu/#textarea). It suggested the sections either be given titles or replaced with div's. I added headings but set display to none to hide them. This is more suitable for users with screen readers.

The page passes through the w3 validator with no issues.
![w3 validator](assets/images/htmlvalidator.png)

#### CSS
The page has passed through the [w3 CSS validator](https://jigsaw.w3.org/css-validator/) with no errors and one warning. As the warning relates to the inability of the validator to check imported code (in this case Google fonts), this acceptable.

![CSS validator report](assets/images/cssvalidator.png)
![CSS validator warning](assets/images/cssvalidatorwarning.png)

#### JavaScript
The page passes through [JS hint](https://jshint.com/) showing one unused variable, the answerQuestion() function on line 143. This is because the function is being called by an onclick function which is added to the HTML (line 89), thus the warning is not an issue.

![JS hint](assets/images/jshint.png)

#### Lighthouse
![Lighthouse image](assets/images/lighthouse.png)

## Deployment
The application was created on Gitpod using The Code Institute template (https://github.com/Code-Institute-Org/gitpod-full-template) and VS Code Plugin and deployed to Github with the following steps:

* Login to Github, otherwise create an account.
* Navigate to the repository ('Explore -> 'ewradcliffe/Guess-the-country') or follow the link (https://github.com/ewradcliffe/Guess-the-country).
* Once in the repository navigate to the 'Settings' tab.
* Navigate to the 'Pages' section, select the branch to deploy and save the changes.

The site can be deployed from gitpod. To run the programme:
*  Enter the command "python3 -m http.server" in the terminal and open the new tab when prompted. * Alternatively, while the programme is running select [link to the port](https://8000-ewradcliffe-guessthecou-csiyzn2swi2.ws-eu114.gitpod.io) on the port tab in VS code.

The link to website is https://ewradcliffe.github.io/Guess-the-country/

Please note that to save any changes:
* Save as usual
* To commit changes, enter 'git add .' in the terminal and then enter 'git commit -m "summerise changes."
* Once all changes are made use the command 'git push' to push changes to github.

To fork;
* Click fork in the top right hand corner, and create new fork.
* Confirm the owner of the fork, the repository name and description.
* Click "Create fork".

To clone:
* To clone, you must first fork the repository as per above.
* Click on the "Code" button and copy the URL.
* In Git Bash, navigate to the location you would like to create the cloned directory.
* Enter git clone, paste the URL, and press enter.

## Credits
* Random number selector taken from https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/

* Fonts from https://fonts.google.com/

* Tick and cross from https://fontawesome.com/

* Country silhouettes from https://silhouettegarden.com/category/country/

* Favicon generated by Favicon generator https://www.favicon-generator.org/

* Header background from https://www.pexels.com/

* Code for onclick Display Buttons in https://www.geeksforgeeks.org/how-to-get-the-id-of-the-clicked-button-using-javascript-jquery/
