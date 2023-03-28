// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        license = "[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "APACHE 2.0") {
        license = "[![License](https://img.shields.io/badge/license-APACHE_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "GPL 3.0") {
        license = "[![License](https://img.shields.io/badge/license-GPL_3.0-lightblue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "BSD 3") {
        license = "[![License](https://img.shields.io/badge/license-BSD_3-red.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
        license = " ";
    }
    return license;
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        license = "https://opensource.org/licenses/MIT";
    } else if (license === "APACHE 2.0") {
        license = "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "GPL 3.0") {
        license = "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "BSD 3") {
        license = "https://opensource.org/licenses/BSD-3-Clause";
    } else {
        license = " ";
    }
    return license;
}

// A function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, guidelines, license, username, email }) =>
    `# ${title}                                                                     
${renderLicenseBadge(license)}
## Description
${description}

## Table of Contents
<a href="#installation">Installation</a>\n
<a href="#usage">Usage</a>\n
<a href="#guidelines">GuideLines</a>\n
<a href="#license">License</a>\n
<a href="#question">Questions</a>

<div id="installation"></div>


## Installation
${installation}

<div id="usage"></div>


## Usage
${usage}

<div id="guidelines"></div>


## Guidelines
${guidelines}

<div id="license"></div>


## License
${renderLicenseLink(license)}

<div id="question"></div>


## Questions
Github: https://github.com/${username}\n
Email me for questions at: ${email}

`;


module.exports = generateMarkdown;