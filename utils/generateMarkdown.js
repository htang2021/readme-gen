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

// Function to cycle thru returned list of keys from the response data object
// and map to the SubTitles to create a TOC with page link to each
const insertTocList = data => {

  if (data.tocRequired) {
    let tocArray = "";
    Object.keys(data).forEach(item => {
      switch(item) {
        case 'installation':
          tocArray += " [Installation](README.md#Installation) \n\n";
          break;
        case 'usage':
          tocArray += " [Usage](README.md#Usage) \n\n";
          break;
        case 'credit':
          tocArray += " [Credits](README.md#Credits) \n\n";
          break;
        case 'license':
          tocArray += " [License](README.md#License) \n\n";
          break;
        case 'features':
          tocArray += " [Features](README.md#Features) \n\n";
          break;
        case 'contributing':
          tocArray += " [Contributing](README.md#Contributing) \n\n";
          break;
        case 'tests':
          tocArray += " [Tests](README.md#Tests) \n\n";
          break;
        case 'gitUserName':
          tocArray += " [Questions](README.md#Questions) \n\n";
      }
    })
    return `${tocArray}`;

  } else {
    return'';
  }
}

// Function to insert Table of Content Heading only if user confirms
const insertTocTitle = data => {
  console.log(Object.keys(data));
  if (data.tocRequired) {
    return `
## Table of Contents
`;
  }
  return '';
};

// Function to insert screenshot from a set location with user input 
// filename or simply return empty string
const insertImage = imgFileName => {
  if (imgFileName) {
    return `
    ![Project Screenshot](./assets/images/${imgFileName})
    `;
  }
  return '';
}

// Function to insert Contributing section if choose yes to adopt
const renderContribution = isContributing => {
  if (isContributing) {
    return `
## Contributing
Adopting to Contributor Covenant!
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
`;
  }
  return '';
}

// Function to generate markdown for README
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

${renderContribution(data.contributing)}
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
