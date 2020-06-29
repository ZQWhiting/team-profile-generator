const inquirer = require('inquirer')
const Engineer = require('./Engineer')
const Manager = require('./Manager')
const Intern = require('./Intern')

class Team {
    #questions;
    constructor() {
        this.employees = []
        this.#questions = {
            newEmployee: [{
                type: 'list',
                name: 'newEmployee',
                message: `Would you like to add a new employee?`,
                choices: ['Engineer', 'Intern', 'Finish building team']
            }],
            officeNumber: [{
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
            }],
            github: [{
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
            }],
            school: [{
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
            }],
            defaultInfo: [
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
            ],
        }
    }

    async buildTeam(team) {

        const createEmployee = async function (roleQuestion, role, roleConstructor) {
            console.log(`Enter your ${role}'s info`)

            let question = team.#questions.defaultInfo.concat(roleQuestion)

            await inquirer
                .prompt(question)
                .then(async answer => {
                    const { name, id, email, ...rest } = answer;
                    const [varAnswer] = Object.values(rest)

                    team.employees.push(new roleConstructor(name, id, email, varAnswer))

                    await promptNewEmployee()
                })
        }

        const promptNewEmployee = async function () {
            await inquirer
                .prompt(team.#questions.newEmployee)
                .then(async answer => {
                    const { newEmployee } = answer;
                    switch (newEmployee) {
                        case 'Engineer':
                            await createEmployee(team.#questions.github, 'engineer', Engineer)
                            break;
                        case 'Intern':
                            await createEmployee(team.#questions.school, 'intern', Intern)
                            break;
                        case 'Finish building team':
                            console.log(`You've finished building your team.`);
                            break;
                    }
                })
        }

        await createEmployee(team.#questions.officeNumber, 'manager', Manager)
    }
}

module.exports = Team;