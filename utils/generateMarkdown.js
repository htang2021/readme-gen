// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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

    //const tocConfirm = data.tocRequired;

    // function to insert Table of Content if user confirms
    // const insertToc = tocConfirm => {
    //   if (tocConfirm) {
    //     return `
    //       ## Table of Contents

    //     `;
    //   }
    //   return '';
    // };

    // function to insert screenshot from a set location with user input 
    // filename or simply return empty string
    // const insertImage = imgFileName => {
    //   if (imgFileName) {
    //     return `
    //       ![Project Screenshot](assets/images/${imgFileName})
    //     `;
    //   }
    //   return '';
    // }

  console.log(data);
  console.log("-------------");

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

  ## License
  ${data.license}

  ## Badges

  ## Features
  ${data.features}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  Last updated ${new Date()}
`;

  return mdValue;
}

module.exports = generateMarkdown;
