//function to generate readme
function generateMarkdown(data) {
    const badges = {
        "Apache License 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://www.opensource.org/licenses/Apache-2.0)",
        "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        "GNU LGPL v3": "[![License: LGPL 3.0](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
        "GNU GPL v3": "[![License: GPL v3.0](https://img.shields.io/badge/License-GPLv3-pink.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        "GNU AGPL v3": "[![License: AGPL v3.0](https://img.shields.io/badge/License-AGPL%20v3-red.svg)](https://www.opensource.org/licenses/AGPL-3.0)",
        "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "MPL 2.0": "[![License: MPL v2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0.html)",
        "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)",
    };

    return `
  
# ${data.title}
${badges[data.license] || ""}
  
   
  
## Description
  
${data.description}.
  
  
## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  
## Installation
  
      
${data.installation}
  
  
## Usage
  
${data.usage}
  
      
      
## Contribution
      
      
${data.contribution}
      
      
## Tests
      
${data.tests}
      
      
## Questions
      
For any questions about this project, please visit my GitHub page: [GitHub Profile](https://github.com/${data.username})
      
Or email me at: [Jess Greene](mailto:${data.email})
      
## License
      
${data.license} 
       
  
  `;
}

module.exports = generateMarkdown;



