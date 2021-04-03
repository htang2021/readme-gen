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
            message: 'Enter description of the project (Required): ',
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
            message: 'Is Table of Content required? (y/N): ',
            default: false
        },
        {
            type: 'editor',
            name: 'installation',
            message: `What are the steps required to install your project? (Required) 
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
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required): ',
            validate: usageDesc => {
                if (usageDesc) {
                    return true;
                } else {
                    console.log('Please enter the installation steps for this project!');
                    return false;
                }
            }
        },
        {
            type: 'link',
            name: 'description',
            message: 'Enter description of the project (Required): '
        },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: 'Enter description of the project (Required): '
        // },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: 'Enter description of the project (Required): '
        // },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: 'Enter description of the project (Required): '
        // },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: 'Enter description of the project (Required): '
        // }
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
