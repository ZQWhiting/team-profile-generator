const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

let employees = []

const addNew = [{
    type: 'list',
    name: 'addNew',
    message: `Would you like to add a new employee?`,
    choices: ['Engineer', 'Intern', 'Finish building team']
}];
const officeNumberQuestion = [{
    type: 'input',
    name: 'officeNumber',
    message: `What is the employee's office number?`,
    validate: input => {
        if (/^[#\w][\w#-]*$/.test(input)) {
            return true;
        } else {
            console.log('Invalid office number. Office number can only contain letters, numbers, and special characters "#-_"');
            return false;
        }
    }
}];
const githubQuestion = [{
    type: 'input',
    name: 'github',
    message: `What is the employee's github?`,
    validate: input => {
        if (/^[\w](?:[\w]|-(?=[\w])){0,38}$/.test(input)) {
            return true;
        } else {
            console.log('GitHub username not valid. Use valid GitHub username format');
            return false;
        }
    }
}];
const schoolQuestion = [{
    type: 'input',
    name: 'school',
    message: `What is the employee's school?`,
    validate: input => {
        if (/[A-Za-z\s]+$/.test(input)) {
            return true;
        } else {
            console.log('Invalid school name. School can only contain letters and whitespaces.')
            return false;
        }
    }
}];
const defaultInfoQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `What is the employee's name?`,
        validate: input => {
            if (/^[a-zA-Z][a-zA-Z\s]*$/.test(input)) {
                return true;
            } else {
                console.log('Not a valid name. Names can only contain letters and whitespaces.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the employee's id nubmer?`,
        validate: input => {
            if (/^[\w#][\w#-]*$/.test(input)) {
                return true;
            } else {
                console.log('Not a valid ID. Employee ID can only contain letters, numbers, and the special characters "#-_"');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the employee's email?`,
        validate: input => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            } else {
                console.log('Not a valid email. Use valid email format.')
                return false;
            }
        }
    },
]

function startApp() {
    employees = []
    createEmployee(officeNumberQuestion, 'manager', Manager)
}

function createEmployee(roleQuestion, role, roleConstructor) {
    console.log(`Enter your ${role}'s info`)

    let question = defaultInfoQuestions.concat(roleQuestion)

    inquirer
        .prompt(question)
        .then(answer => {
            const { name, id, email, ...rest } = answer;
            const [ varAnswer ] = Object.values(rest)

            employees.push(new roleConstructor(name, id, email, varAnswer))

            addEmployee()
        })
}

function addEmployee() {
    inquirer.prompt(addNew)
        .then(answer => {
            const { addNew } = answer;
            switch (addNew) {
                case 'Engineer':
                    createEmployee(githubQuestion, 'engineer', Engineer)
                    break;
                case 'Intern':
                    createEmployee(schoolQuestion, 'intern', Intern)
                    break;
                case 'Finish building team':
                    finishBuild();
                    break;
            }
        })
}

function finishBuild() {
    console.log(employees);
    // construct website
}

startApp()