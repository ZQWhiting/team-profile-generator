const { library, icon } = require('@fortawesome/fontawesome-svg-core')
const { faMugHot, faGlasses, faGraduationCap } = require('@fortawesome/free-solid-svg-icons')

library.add(faMugHot, faGlasses, faGraduationCap)

function buildEmployeeCards(team) {
    // html to return
    let teamHtml = ``

    team.forEach(employee => {
        let { name, id, email, role } = employee;

        // capitalize employee names
        name = name
            .split(' ')
            .map(name => {
                return name.charAt(0).toUpperCase() + name.slice(1);
            })
            .join(' ');

        // set value for html to return
        teamHtml += `
            <div class="col my-2">
                <div class="card h-100 shadow">
                    <h2 class="card-header text-white">${name}<p class='h3'>${getIcon(role)}${role}</p></h2>
                    <div class="card-body">
                        <div class="list-group">
                            <div class="list-group-item">ID: ${id}</div>
                            <div class="list-group-item">Email: ${getEmail(email)}</div>
                            <div class="list-group-item"> ${getVar(employee)}</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    });

    // return html
    return teamHtml
}

function getEmail(email) {
    // html to return
    return `<a href='${email}'>${email}</a>`
}

function getVar(employee) {
    // Role specific value
    // Capitalize value
    // Separate into two words
    let varKey = Object.keys(employee)[4];
    varKey = varKey.charAt(0).toUpperCase() + varKey.slice(1);
    if (varKey === 'OfficeNumber') varKey = varKey.split("N").join(" N");

    // Role specific value
    let varValue = Object.values(employee)[4];

    // html to return
    if (varKey === 'Github') {
        return `${varKey}: <a href='https://github.com/${varValue}' target='_blank'>${varValue}</a>`
    }
    return `${ varKey }: ${ varValue }`
}

function getIcon(role) {
    switch (role) {
        case "Manager":
            return icon({ previx: 'fas', iconName: 'mug-hot' }).html
        case "Intern":
            return icon({ previx: 'fas', iconName: 'graduation-cap' }).html
        case "Engineer":
            return icon({ previx: 'fas', iconName: 'glasses' }).html
    }
}

module.exports = function buildHtml(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./css/bootstrap.min.css">
        <link rel="stylesheet" href="./css/style.css">
    </head>
    <body>
        <header class='row'>
            <h1 class="col text-center text-white py-4">My Team</h1>
        </header>
        <main class='container'>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
                ${buildEmployeeCards(team.employees)}
            </div>
        </main>
    </body>
    </html>`
}