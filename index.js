const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

const questions = [
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
    {
        type: 'list',
        name: 'role',
        message: `What is the employee's role?`,
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `What is the employee's office number?`,
        when: ({ role }) => role === 'Manager',
        validate: input => {
            if (/^[#\w][\w#-]*$/.test(input)) {
                return true;
            } else {
                console.log('Invalid office number. Office number can only contain letters, numbers, and special characters "#-_"');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `What is the employee's github?`,
        when: ({ role }) => role === 'Engineer',
        validate: input => {
            if (/^[\w](?:[\w]|-(?=[\w])){0,38}$/.test(input)) {
                return true;
            } else {
                console.log('GitHub username not valid. Use valid GitHub username format');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `What is the employee's school?`,
        when: ({ role }) => role === 'Intern',
        validate: input => {
            if (/[A-Za-z\s]+$/.test(input)) {
                return true;
            } else {
                console.log('Invalid school name. School can only contain letters and whitespaces.')
                return false;
            }
        }
    },
]

function promptEmployeeInfo() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const { name, id, email, role, officeNumber, github, school } = answers;
            switch (role) {
                case "Manager":
                    return new Manager(name, id, email, officeNumber);
                case "Engineer":
                    return new Engineer(name, id, email, github);
                case "Intern":
                    return new Intern(name, id, email, school);
            }
        })
}

promptEmployeeInfo()