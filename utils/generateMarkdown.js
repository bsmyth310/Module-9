//Handles license badges 
function renderLicenseBadge(license) {
    if (!license) return ''

    switch(license){
        case "MIT":{
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
        }

        case "Apache":{
            return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
        }
        
        case "GPL":{
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
        }
        
        default: break
    }
}

//Handles license link
function renderLicenseLink(license) {
    if (!license) return ''

    switch(license){
        case "MIT":{
            return '[License: MIT](https://opensource.org/licenses/MIT)'
        }

        case "Apache":{
            return '[License](https://opensource.org/licenses/Apache-2.0)'
        }
        
        case "GPL":{
            return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
        }
        
        default: break
    }
}

//Handles license content
function renderLicenseSection({license}) {
    if (!license) return ''

    return 'This application is covered under ${license} license. Read more at ${renderLicenseLink(license)}'
}

//Handles picture render
function renderPicture({picture}) {
    if (!picture) return ''

    return '![](${picture})'
}

//Readme generation
function generateMarkdown(data) {
    return `${renderLicenseBadge(data.license)}

    # ${data.title}

    ## Description

    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [contributions](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Credits

    ${data.credits}

    ## License

    ${renderLicenseSection(data)}

    ## Contributions

    ${data.contribution}

    ## Tests

    ${data.tests}

    ## Questions

    1. Where is your github so I can view more of your projects? https://github.com/${data.github}

    2. What email address should I use to contact you regarding further opportunities or questions? ${data.email}

    Questions regarding this repository? Please contact me at [${data.email}](mailto:${data.email}).

    `;
}

module.exports =generateMarkdown
