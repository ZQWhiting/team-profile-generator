class Employee {
    constructor(name, id, email, role) {
        if (this.validateName(name)) this.name = name;
        if (this.validateId(id)) this.id = id;
        if (this.validateEmail(email)) this.email = email;
        this.role = role;
    }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole () {
        return this.role || 'Employee';
    }
    validateName (name) {
        if (/^[a-zA-Z][a-zA-Z\s]*$/.test(name)) {
            return true;
        } else {
            console.log('Not a valid name. Names can only contain letters and whitespaces.')
            return false;
        }
    }
    validateId (id) {
        if (/^[\w#][\w#-]*$/.test(id)) {
            return true;
        } else {
            console.log('Not a valid ID. Employee ID can only contain letters, numbers, and special characters "#-_"');
            return false;
        }
    }
    validateEmail (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        } else {
            console.log('Not a valid email. Use valid email format.')
            return false;
        }
    }
}

module.exports = Employee;