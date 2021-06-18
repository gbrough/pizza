### Welcome to the Online Pizza Parolor

### Authored by:  Garrett Broughton

### Project Description: 
  -   This is a webpage to help people choose what language they should learn.
  -   HTML: "Build with HTML tags including p,h,div, and span."
  -   CSS: "Added CSS Styling for formatting"
  -   jQuery: "Form gathers input from the user."Uses branching to return the result."

### Technologies Used:
  -   HTML was used for creating the basic information in the header, body, and paragraphs.
  -   CSS was used to format the page around the header, body, image and text.
  -   Bootstrap was used for styling buttons.
  -   jQuery was used to create branching business and UI logic from user input.
  -   Github was also utilized to practices saving changes and providing the Readme instructions.

### Program Setup Instructions: 
  <!-- -  Clone this repository to your desktop or folder you wish to edit the project. You can download by clicking the green code button and choosing clone. Alternatively,  can also issue a git clone command from a terminal, then paste the link "https://github.com/gbrough/programming-language-suggester.git" -->
  -  You can open a built-in terminal in VSCode with a keyboard shortcut (ctrl + ~). Change directory to the top folder of the project you just downloaded(i.e. cd ~/Desktop).
  -  In order to view the project, open index.html in your browser or add the Live Share extention with VSCode. You can add Live Share in the VSCode settings. Click on Live Share on the bottom right to launch once it's installed.
  -  If you want to make changes, launch your code editor to make necessary changes to index.html. You may also need to edit the styles.css in the CSS folder or the scripts.js in the JS folder. You can enter the command (code .) to launch it in VSCode.
  - If you want to publish your changes to the repo, you can upload with a series of Git commands.
    1. git init
    <!-- 2. git remote "type-nickname" "https://github.com/gbrough/programming-language-suggester" -->
    2. git add .
    3. git commit -m "message to document changes"
    4. git push "type-nickname" main
  - This will create a pull request, that will be reviewed for approval. Once the code is approved, the changes will be merged.
  - Thank you for contributing!

### Link to Github Page: 
<!-- <a href="https://gbrough.github.io/programming-language-suggester/">GitHub Page</a> -->

### License 
[MIT license](https://opensource.org/licenses/MIT) others are allowed modify or reuse this project.

<!-- 
Addressbook = Pizza = object
Contacts = Toppings = prototypes
Contact = Topping

Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

Allow the user to choose toppings and size for the pizza they'd like to order.
Create a pizza object constructor with properties for toppings and size.
Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.
Keep it simple to start! You do not need to have a complex formula for determining cost (although you can if you like). The most important part of this code review is using and demonstrating your understanding of constructors and prototypes. 

Add ingredient, assign ID to pizza, find size S,M,L, calculates price based on size
Drop down or radio buttons for ingredients and size - store in object

-->
```
Describe: wordCounter()
Test: "It should return 1 if a passage has just one word."
Code:
Expected Output: 1