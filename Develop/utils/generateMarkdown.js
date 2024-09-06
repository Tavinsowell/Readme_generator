// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL 3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD 3") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`
  + `\n${renderLicenseBadge(data.license)}`
  + `\n## Description`
  + `\n${data.description}`
  + `\n## Table of Contents`
  + `\n* [Installation](#installation)`
  + `\n* [Usage](#usage)`
  + `\n* [License](#license)`
  + `\n* [Contributing](#contributing)`
  + `\n* [Tests](#tests)`
  + `\n* [Questions](#questions)`
  + `\n## Installation`
  + `\n${data.installation}`
  + `\n## Usage`
  + `\n${data.usage}`
  + `\n## License`
  + `\nThis project is licensed under the ${data.license} license.`
  + `\n## Contributing`
  + `\n${data.contribution}`
  + `\n## Tests`
  + `\n${data.test}`
  + `\n## Questions`
  + `\nIf you have any questions, please contact me at [${data.email}].`
  + `\nVisit my GitHub profile at [${data.github}]`

  
  ; }

export default generateMarkdown;
