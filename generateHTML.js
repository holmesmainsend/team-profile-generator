function managerHTML(managerArray) {
    let {
    name,
    id,
    email,
    officeNumber,
  } = managerArray;
  return `
  <div class = "card bg-dark text-info border border-info" style = "width: 18%">
  <h2 class = "card-title text-center">${name}</h2>
    <ul class = "list-group list-group-flush">
      <li class="list-group-item text-dark bg-info border-bottom border-dark">ID: ${id}</li>
      <li class="list-group-item text-dark bg-info border-bottom border-dark">Email: <a class = "text-reset" href = "mailto:${email}">${email}</a></li>
      <li class="list-group-item text-dark bg-info">Office Number: ${officeNumber}</li>
    </ul>
</div>`;
};

function engineerHTML(engineerArray) {
  let {
    name,
    id,
    email,
    github,
  } = engineerArray;
  return `
  <div class = "card bg-dark text-warning border border-warning" style = "width: 18%">
  <h2 class = "card-title text-center">${name}</h2>
    <ul class = "list-group list-group-flush">
      <li class="list-group-item text-dark bg-warning border-bottom border-dark">ID: ${id}</li>
      <li class="list-group-item text-dark bg-warning border-bottom border-dark">Email: <a class = "text-reset" href = "mailto:${email}">${email}</a></li>
      <li class="list-group-item text-dark bg-warning">GitHub: <a class = "text-reset" href="https://github.com/${github}" target="_blank">${github}</a></li>
    </ul>
</div>`;
};

function internHTML(internArray) {
  let {
    name,
    id,
    email,
    school,
  } = internArray;
  return `
  <div class = "card bg-dark text-danger border border-danger" style = "width: 18%">
  <h2 class = "card-title text-center">${name}</h2>
    <ul class = "list-group list-group-flush">
      <li class="list-group-item text-dark bg-danger border-bottom border-dark">ID: ${id}</li>
      <li class="list-group-item text-dark bg-danger border-bottom border-dark">Email: <a class = "text-reset" href = "mailto:${email}">${email}</a></li>
      <li class="list-group-item text-dark bg-danger">School: ${school}</li>
    </ul>
</div>`;
};

function finalHTML(teamArray) {
  managerArray = teamArray.filter(element => element.role === "Manager");
  engineerArray = teamArray.filter(element => element.role === "Engineer");
  internArray = teamArray.filter(element => element.role === "Intern");
  let openingHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Your Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </head>
      <body class = "bg-dark">
      <div class = "container w-50 bg-dark text-white text-center mt-4 py-3 border border-secondary border-bottom-0">
      <h1>Your Team</h1>
      <div class="d-flex flex-row justify-content-center pt-3">
          <div class="px-5 text-info border-bottom border-info">Managers</div>
          <div class="px-5 text-warning border-bottom border-caution">Engineers</div>
          <div class="px-5 text-danger border-bottom border-danger">Interns</div>
      </div>
      </div>
        <div class = "container pt-5 mt-4 d-flex flex-row justify-content-around align-items-center">`
          let managerCards = `${managerHTML(managerArray[0])}${managerHTML(managerArray[1])}${managerHTML(managerArray[2])}`;
          let closerOpener1 = '</div><div class = "container pt-5 mt-4 d-flex flex-row justify-content-around align-items-center">'
  
  
          let engineerCards = `${engineerHTML(engineerArray[0])}${engineerHTML(engineerArray[1])}${engineerHTML(engineerArray[2])}`;
          let closerOpener2 = `</div><div class = "container py-5 mt-4 d-flex flex-row justify-content-around align-items-center">`
  
  
          let internCards = `${internHTML(internArray[0])}${internHTML(internArray[1])}${internHTML(internArray[2])}`;



  let closingHTML =`</div>
      </body>
</html>`;

return openingHTML + managerCards + closerOpener1 + engineerCards + closerOpener2 + internCards + closingHTML;
};


exports.finalHTML = finalHTML;