function managerHTML(managerArray) {
    let {name : managerName, id : managerId, email : managerEmail, officeNumber} = managerArray;
    return `
    <div>
        <h2>${managerName}, Manager</h2>
        <h3>${managerId}</h3>
        <h3>${managerEmail}</h3>
        <h3>${officeNumber}</h3>
    </div>`;
};

function engineerHTML(engineerArray) {
    let {name : engineerName, id : engineerId, email : engineerEmail, github} = engineerArray;
    return `
    <div>
        <h2>${engineerName}, Engineer</h2>
        <h3>${engineerId}</h3>
        <h3>${engineerEmail}</h3>
        <h3>${github}</h3>
    </div>`;
};

function internHTML(internArray) {
    let {name : internName, id : internId, email : internEmail, school} = internArray;
    return `
    <div>
        <h2>${internName}, Intern</h2>
        <h3>${internId}</h3>
        <h3>${internEmail}</h3>
        <h3>${school}</h3>
    </div>`;
};

function finalHTML(managerFinal, engineerFinal, internFinal) {
return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Your Team</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </head>
      <body>
        <h1>Your Team</h1>
        ${managerFinal}
        ${engineerFinal}
        ${internFinal}

    </body>
</html>`;
}


exports.managerHTML = managerHTML;
exports.engineerHTML = engineerHTML;
exports.internHTML = internHTML;
exports.finalHTML = finalHTML;