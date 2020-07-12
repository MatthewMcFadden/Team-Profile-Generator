# Team Profile Generator
The Team Profile Generator is a Node command-line-input application that asks the user information about an engineering team to create a team profile and generates an HTML file displaying summaries for each team member. The application will ask a series of questions for information about the employee and other team members. The user is able to add as many team members they want and may contain a mix of roles such as manager, engineer, and interns. Once the application is completed, it will create an index.html file in the 'dist' folder which displays a well-formatted team roster.

Upon launching the app, the user is asked to type information about the first member of the team. The user enters the team member's name, ID number, email address, and what the employee's role is in the team. It will then ask one final question depending on the role. If the Manager is selected, the employee's office number is requested. If the Engineer was selected, the employee's Github username is requested. If the Intern is selected, it will ask what school the team member is attending.

#### Team Profile GIF
![screenshot](/assets/images/teamProfileScreenshot.jpg)
![demo](/assets/gif/TeamProfileGIF.gif)

#### Test
![demo](/assets/gif/TeamProfile-test.gif)

## How to install
1. Clone from my Github at https://github.com/MatthewMcFadden/Team-Profile-Generator
2. Initialize and install node through the terminal
3. Perform npm install to update any and all necessary node modules
3. Run the application in the terminal with the command line: node index.js

### Improvements
Give the user the ability to add, edit, and delete employee information on the fly without having to delete the index.html file and re-entering information into the application.

### Technologies Used in this application
* NPM module inquirer
* NPM module Jest
* Node
* JavaScript