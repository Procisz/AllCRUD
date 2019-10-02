const sha1 = require('js-sha1');
const DB = require('./DB');

const db = new DB();

module.exports = class loginDB {

    async getLoginDataAdmin() {
        const result = await db.login('admin', object);
        console.log(result);
        return result;
    };

    async loginUser(object) {
        let users = await db.readLogin('customers', object);
        let userId = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === object.email && users[i].password === sha1(object.password)) {
                userId = users[i].id;
                break;
            }
        }
        console.log(`ez elvileg biztos, hogy az id: ${userId}`);
        return userId;
    };

    async createToken(userId) {
        let token = '';
        for (let i = 0; i < 50; i++) {
            let index = Math.round(Math.random() * 50 + 65);
            token += String.fromCharCode(index);
        }
        const tableId = await db.updateTable(userId, token, 'customers', 'token');
        return token;
    };

    async checkLogin(req) {
        if (!req.cookies.customerCookie) {
            return false;
        }

        const loggedInUser = await db.read('customers', 'token', req.cookies.customerCookie);
        console.log(`checkloginban loggedinuser: ${loggedInUser.id}`);
        return loggedInUser;

    }

}

