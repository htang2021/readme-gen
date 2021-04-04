// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    File Name:`
        },
        {
            type: 'input',
            name: 'credit',
            message: `\nList collaborator(s) to this project (separated by commas), if any.
    Name(s): (hit Enter if none)`
        },
        {
            type: 'checkbox',
            name: 'license',
            message: `\nPlease enter any licensing requirements, whether or not and how others
    can use this project as you see fit (Required): `,
            choices: ['MIT', 'GNU GPLv3', 'ISC License', 'Apache License 2.0', 'None'],
            default: 'MIT'
        },
        {
            type: 'editor',
            name: 'features',
            message: `\nEnter a bulleted list of features for this app (Optional). For example:
    -  Auto readme.md ceation
    -  Supports 2-factor authentication
    -  Added option to add badges`
        },
        {
            type: 'input',
            name: 'contributing',
            message: `\nIf you would like other developers to contribute to this project, 
    please incorporate your requirements or adopt to the industry Contributor
    Convenant as you see fit for your project. (Enter to skip)`
        },
        {
            type: 'editor',
            name: 'tests',
            message: '\nEnter test guidelines for this application in the editor (Nice to have): '
        },
        {
            type: 'input',
            name: 'gitUserName',
            message: '\nPlease enter your GitHub username: (Required)',
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
            message: '\nPlease enter your email in the event others need to reach out for questions: (Required)',
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

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {

        fs.writeFile('./test.md', fileContent, err => {
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


promptUser()
    .then(response => {
        questions.push(response); // stores obj in array
        // spread operator assignments
        writeFile(generateMarkdown(response));
        // const { title, description } = response;
        // console.log(title);
        // console.log(description);
    });
    // .then(markdownContent => {
    //     console.log("********* markdownContent*********");
    //     console.log(markdownContent);
    //     console.log("********** markdown content above***********");

    //     writeFile(markdownContent);
    // });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./README.md', fileContent, err => {
//             // if there's an error, reject the Promise and send the error
//             // to the Promise's `.catch()` method
//             if (err) {
//                 reject (err);
//                 // return out of the function here to make sure the Promise
//                 // doesn't accidentally execute resolve() fucntion as well
//                 return;
//             }

//             // if everything went well, resolve the Promise and send the
//             // successful data to the `.then()` method
//             resolve({
//                 ok: true,
//                 message: 'File created!'
//             });
//         });
//     });
// };

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
// init();
