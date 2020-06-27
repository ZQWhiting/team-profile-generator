const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern')

        if (this.validateSchool(school)) this.school = school;
    }
    getSchool() {
        return this.school;
    }
    validateSchool(school) {
        if (/[A-Za-z\s]+$/.test(school)) {
            return true;
        } else {
            console.log('Invalid school name. School can only contain letters and whitespaces.')
            return false;
        }
    }
}

module.exports = Intern;