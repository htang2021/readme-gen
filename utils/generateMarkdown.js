// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return '![MIT](https://choosealicense.com/licenses/mit/)';
    case 'GNU GPLv3':
      return '![GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)';
    case 'ISC License':
      return '[ISC License](https://opensource.org/licenses/ISC)';
    case 'Apache License 2.0':
      return '[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === 'None') {
    return '';
  }
  return `
    ## License
    This project is under the terms of the following license(s): 
    ${renderLicenseLink(license)}
  `;
}

// function to insert Table of Content if user confirms
const insertToc = tocConfirm => {
  if (tocConfirm) {
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
      ![Project Screenshot](assets/images/${imgFileName})
    `;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const mdValue = 
`# ${data.title}

## Description
${data.description}

${insertToc(data.tocRequired)}

## Installation
${data.installation}

## Usage
${data.usage}
${insertImage(data.imgFile)}

## Credits
${data.credit}

${renderLicenseSection(data.license)}

## Badges

## Features
${data.features}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Git Repo: [${data.gitUserName}](https://wwww.github.com/${data.gitUserName}/)\n
Contact Email: ${data.email}


Last updated: ${new Date()}
`;

  return mdValue;
}

module.exports = generateMarkdown;
