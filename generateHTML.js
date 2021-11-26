function managerHTML(managerArray) {
    let {name : managerName, id : managerId, email : managerEmail, officeNumber} = managerArray;
    return `    <div>
        <h2>${managerName}, Manager</h2>
        <h3>${managerId}</h3>
        <h3>${managerEmail}</h3>
        <h3>${officeNumber}</h3>
    </div>`;
};

function engineerHTML(engineerArray) {
    let {name : engineerName, id : engineerId, email : engineerEmail, github} = engineerArray;
    return `    <div>
        <h2>${engineerName}, Engineer</h2>
        <h3>${engineerId}</h3>
        <h3>${engineerEmail}</h3>
        <h3>${github}</h3>
    </div>`;
};

function internHTML(internArray) {
    let {name : internName, id : internId, email : internEmail, school} = internArray;
    return `    <div>
        <h2>${internName}, Intern</h2>
        <h3>${internId}</h3>
        <h3>${internEmail}</h3>
        <h3>${school}</h3>
    </div>`;
};

function finalHTML(managerArray, engineerArray, internArray) {
`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Your Team</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>Your Team</h1>
        ${managerArray}
        ${engineerArray}
        ${internArray}
      </body>
    </html>`;
}


exports.managerHTML = managerHTML;
exports.engineerHTML = engineerHTML;
exports.internHTML = internHTML;
exports.finalHTML = finalHTML;