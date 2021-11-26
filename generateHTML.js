function managerHTML(managerArray) {
    console.log(managerArray);
    let {name, id, email, officeNumber} = managerArray;
    console.log(name, id, email, officeNumber);
};

function engineerHTML(engineerArray) {
    console.log(engineerArray);
    let {name, id, email, github} = engineerArray;
    console.log(name, id, email, github);
};

function internHTML(internArray) {
    console.log(internArray);
    let {name, id, email, school} = internArray;
    console.log(name, id, email, school);
};


exports.managerHTML = managerHTML;
exports.engineerHTML = engineerHTML;
exports.internHTML = internHTML;