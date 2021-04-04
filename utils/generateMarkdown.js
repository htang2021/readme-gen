// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  switch(license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'None':
      return '';
  }
}

// Function that returns the license link if not 'None'
const renderLicenseLink = license => {
  switch(license) {
    case 'MIT':
      return '[MIT](https://choosealicense.com/licenses/mit/)';
    case 'GNU GPLv3':
      return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    case 'ISC License':
      return '[ISC License](https://opensource.org/licenses/ISC)';
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {

  if (license === 'None') {
    return '';
  }
  return `
## License
This project is under the terms of the following license: 
${renderLicenseLink(license)}\n
${renderLicenseBadge(license)}`;
}

const insertSubTitle = data => {

}

// function to first determine length of object for TOC subTitles
const insertTocList = data => {

  if (data.tocRequired) {
    let tocArray = "";
    Object.keys(data).forEach(item => {
      switch(item) {
        case 'installation':
          tocArray += "[Installation](test.md#Installation)\n";
          break;
        case 'usage':
          tocArray += "[Usage](test.md#Usage)\n";
          break;
        case 'credit':
          tocArray += "[Credits](test.md#Credits)\n";
          break;
        case 'license':
          tocArray += "[License](test.md#License)\n";
          break;
        case 'features':
          tocArray += "[Features](test.md#Features)\n";
          break;
        case 'contributing':
          tocArray += "[Contributing](test.md#Contributing)\n";
          break;
        case 'tests':
          tocArray += "[Tests](test.md#Tests)\n";
          break;
        case 'gitUserName':
          tocArray += "[Questions](test.md#Questions)\n";
      }
    })
    return `${tocArray}`;

    // const tocNum = Object.keys(data).length;
    // for (let i=0; i < tocNum; i++) {
    //   insertSubTitle(data);
    // }

  } else {
    return'';
  }
  
    // Object.keys(data).forEach(item => {
    //   console.log(`${item}`);
    // })
}

// function to insert Table of Content Heading only if user confirms
const insertTocTitle = data => {
  console.log(Object.keys(data));
  if (data.tocRequired) {
    //insertTocList(data);
    return `
## Table of Contents
`;
  }
  return '';
};

// function to insert screenshot from a set location with user input 
// filename or simply return empty string
const insertImage = imgFileName => {
  if (imgFileName) {
    return `
    ![Project Screenshot](./assets/images/${imgFileName})
    `;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const mdValue = 
`# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

${insertTocTitle(data)}
${insertTocList(data)}

## Installation
${data.installation}

## Usage
${data.usage}
${insertImage(data.imgFile)}

## Credits
${data.credit}

${renderLicenseSection(data.license)}

## Features
${data.features}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Git Profile: [${data.gitUserName}](https://www.github.com/${data.gitUserName}/)\n
Any questions or recommendations on this app, please feel free to reach out to [Me](mailto:${data.email}).


Last updated: ${new Date()}
`;

  return mdValue;
}

module.exports = generateMarkdown;
