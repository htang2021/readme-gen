// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = [];

const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project (Required): ',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'description',
            message: '\nEnter description of the project (Required): ',
            validate: projectDesc => {
                if (projectDesc) {
                    return true;
                } else {
                    console.log('Please enter the description of the project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tocRequired',
            message: '\nIs Table of Content required? (y/N): ',
            default: false
        },
        {
            type: 'editor',
            name: 'installation',
            message: `\nWhat are the steps required to install your project? (Required) 
    Please provide a step-by-step description of how to get the environment running.  For example,
        1. Do this....
        2. Do that....
        3. And so on..
    A default editor will open up (Windows/Macs).  Once the steps are entered,
    exit the editor but save it when prompted to save to its default location.
`,
            validate: installSteps => {
                if (installSteps) {
                    return true;
                } else {
                    console.log('Please enter the installation steps for this project!');
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'usage',
            message: `\nUsage instructions. (Required)
    Please provide a step-by-step instruction on how to use the application via
    the editor, which will open up once you hit "Enter".  Do not include any images
    or screenshots until asked to.  Once completed, exit the editor but save the file 
    when prompted to save to its default location.
`,
            validate: usageDesc => {
                if (usageDesc) {
                    return true;
                } else {
                    console.log('Please include the usage instructions for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'imgFile',
            message: `\nTo add a screenshot, please enter the name of the file for
    your screenshot.  Make sure to place your screenshot in the assets/images folder 
    and enter the name of the screenshot file (or simply press Enter if none).
    File Name: `
        },
        {
            type: 'input',
            name: 'credit',
            message: `\nList collaborator(s) to this project (separated by commas), if any.
    Name(s) (hit Enter if none): `
        },
        {
            type: 'list',
            name: 'license',
            message: `\nPlease enter any licensing requirements, whether or not and how others
    can use this project (Required): `,
            choices: ['MIT', 'GNU GPLv3', 'ISC License', 'Apache License 2.0', 'None'],
            default: 'None'
        },
        {
            type: 'editor',
            name: 'features',
            message: `\nEnter a bulleted list of features for this app (Recommended). For example:
    -  Auto readme.md ceation
    -  Supports 2-factor authentication
    -  Added option to add badges
    `
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: `\nWould you like other developers to contribute to this project and adopt 
    the industry Contributor Convenant? (y/N): `,
            default: false
        },
        {
            type: 'editor',
            name: 'tests',
            message: '\nEnter test guidelines for this application in the editor (Recommended): '
        },
        {
            type: 'input',
            name: 'gitUserName',
            message: '\nPlease enter your GitHub username (Required): ',
            validate: gitUserName => {
                if (gitUserName) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: '\nPlease enter your email in the event others need to reach out for questions (Required): ',
            validate: userEmail => {
                if (userEmail) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ])
}

// Write markdown content to the specified file and process accordingly

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {

        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error
            // to the Promise's `.catch()` method
            if (err) {
                reject (err);
                // return out of the function here to make sure the Promise
                // doesn't accidentally execute resolve() fucntion as well
                return;
            }
            // if everything went well, resolve the Promise and send the
            // successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// Initializing the process to prompt for input and process response 
// thru two separate functions to generate MD and to write to file

promptUser()
    .then(response => {
        questions.push(response); // stores obj in array
        writeFile(generateMarkdown(response));
    });
