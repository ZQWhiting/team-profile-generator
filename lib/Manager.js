const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Manager');

        if (this.validateOfficeNumber(officeNumber)) this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    validateOfficeNumber(officeNumber) {
        if (/^[#\w][\w#-]*$/.test(officeNumber)) {
            return true;
        } else {
            console.log('Invalid office number. Office number can only contain letters, numbers, and special characters "#-_"');
            return false;
        }
    }
}

module.exports = Manager;