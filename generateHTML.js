/* 
One single HTML function
const teamCreator = (teamArray) => {
  (change lets to capture get functions within markdown)
  -- all of current functions except convert to e.g. const managerHTML = managerArray => {
    return `
      <div class = "card bg-dark text-info border border-info" style = "width: 18%">
        <h2 class = "card-title text-center">${manager.getName()}</h2>
          <ul class = "list-group list-group-flush">
            <li class="list-group-item text-dark bg-info border-bottom border-dark">ID: ${managerId}</li>
            <li class="list-group-item text-dark bg-info border-bottom border-dark">Email: <a href = "mailto: ${managerEmail}">${managerEmail}</a></li>
            <li class="list-group-item text-dark bg-info">Office Number: ${officeNumber}</li>
          </ul>
        </div>
      </div>`;
  }

  -- next step would be to take all cards generated and create single function to handle all HTML created here, then push it all into finalHTML --

*/

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamCreator = teamArray => {


  return `<!DOCTYPE html>
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
        <div class = "container pt-5 mt-4 px-3">
            
            <div class = "card bg-dark text-info border border-info" style = "width: 18%">
                <h2 class = "card-title text-center"> Manager Name </h2>
                  <ul class = "list-group list-group-flush">
                    <li class="list-group-item text-dark bg-info border-bottom border-dark">ID: Manager ID </li>
                    <li class="list-group-item text-dark bg-info border-bottom border-dark">Email: <a href = "mailto: Manager Email"> Manager Email </a></li>
                    <li class="list-group-item text-dark bg-info">Office Number: Office Number </li>
                  </ul>
            </div>
            <div class = "card bg-dark text-warning border border-warning" style = "width: 18%">
              <h2 class = "card-title text-center"> Engineer Name </h2>
                <ul class = "list-group list-group-flush">
                  <li class="list-group-item text-dark bg-warning border-bottom border-dark">ID: Engineer ID </li>
                  <li class="list-group-item text-dark bg-warning border-bottom border-dark">Email: <a href = "mailto: Engineer Email"> Engineer Email </a></li>
                  <li class="list-group-item text-dark bg-warning">GitHub: <a href="github.com/ Github "> Github </a></li>
                </ul>
            </div>
            <div class = "card bg-dark text-danger border border-danger" style = "width: 18%">
              <h2 class = "card-title text-center"> Intern Name </h2>
                <ul class = "list-group list-group-flush">
                  <li class="list-group-item text-dark bg-danger border-bottom border-dark">ID: Intern ID </li>
                  <li class="list-group-item text-dark bg-danger border-bottom border-dark">Email: <a href = "mailto: Intern Email "> Intern Email </a></li>
                  <li class="list-group-item text-dark bg-danger">School: School </li>
                </ul>
            </div>

         </div>
      </body>
</html>`;
}















// function managerHTML(managerArray) {
//   let {
//     name: managerName,
//     id: managerId,
//     email: managerEmail,
//     officeNumber,
//   } = managerArray;
//   return `
//       <div class = "card bg-dark text-info border border-info" style = "width: 18%">
//         <h2 class = "card-title text-center">${managerName}</h2>
//           <ul class = "list-group list-group-flush">
//             <li class="list-group-item text-dark bg-info border-bottom border-dark">ID: ${managerId}</li>
//             <li class="list-group-item text-dark bg-info border-bottom border-dark">Email: <a href = "mailto: ${managerEmail}">${managerEmail}</a></li>
//             <li class="list-group-item text-dark bg-info">Office Number: ${officeNumber}</li>
//           </ul>
//         </div>
//       </div>`;
// }

// function engineerHTML(engineerArray) {
//   let {
//     name: engineerName,
//     id: engineerId,
//     email: engineerEmail,
//     github,
//   } = engineerArray;
//   return `
//       <div class = "card bg-dark text-warning border border-warning" style = "width: 18%">
//         <h2 class = "card-title text-center">${engineerName}</h2>
//           <ul class = "list-group list-group-flush">
//             <li class="list-group-item text-dark bg-warning border-bottom border-dark">ID: ${engineerId}</li>
//             <li class="list-group-item text-dark bg-warning border-bottom border-dark">Email: <a href = "mailto: ${engineerEmail}">${engineerEmail}</a></li>
//             <li class="list-group-item text-dark bg-warning">GitHub: <a href="github.com/${github}">${github}</a></li>
//           </ul>
//       </div>`;
// }

// function internHTML(internArray) {
//   let {
//     name: internName,
//     id: internId,
//     email: internEmail,
//     school,
//   } = internArray;
//   return `
//       <div class = "card bg-dark text-danger border border-danger" style = "width: 18%">
//         <h2 class = "card-title text-center">${internName}</h2>
//           <ul class = "list-group list-group-flush">
//             <li class="list-group-item text-dark bg-danger border-bottom border-dark">ID: ${internId}</li>
//             <li class="list-group-item text-dark bg-danger border-bottom border-dark">Email: <a href = "mailto: ${internEmail}">${internEmail}</a></li>
//             <li class="list-group-item text-dark bg-danger">School: ${school}</li>
//           </ul>
//         </div>
//       </div>`;
// }

// function finalHTML(managerFinal, engineerFinal, internFinal) {
//   return `<!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <meta http-equiv="X-UA-Compatible" content="ie=edge">
//         <title>Your Team</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
//       </head>
//       <body class = "bg-dark">
//       <div class = "container w-50 bg-dark text-white text-center mt-4 py-3 border border-secondary border-bottom-0">
//       <h1>Your Team</h1>
//       <div class="d-flex flex-row justify-content-center pt-3">
//           <div class="px-5 text-info border-bottom border-info">Managers</div>
//           <div class="px-5 text-warning border-bottom border-caution">Engineers</div>
//           <div class="px-5 text-danger border-bottom border-danger">Interns</div>
//       </div>
//   </div>
//         <div class = "container pt-5 mt-4 px-3">
//             ${managerFinal} ${engineerFinal} ${internFinal}
//         </div>
//       </body>
// </html>`;
// }

exports.teamCreator = teamCreator;
// exports.managerHTML = managerHTML;
// exports.engineerHTML = engineerHTML;
// exports.internHTML = internHTML;
// exports.finalHTML = finalHTML;