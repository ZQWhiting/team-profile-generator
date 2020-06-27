const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer')

        if (this.validateGithub(github)) this.github = github;
    }
    getGithub() {
        return this.github;
    }
    validateGithub(github) {
        if (/^[\w](?:[\w]|-(?=[\w])){0,38}$/.test(github)) {
            return true;
        } else {
            console.log('GitHub username not valid. Use valid GitHub username format');
            return false;
        }
    }
}

module.exports = Engineer;