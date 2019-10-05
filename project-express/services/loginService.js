const sha1 = require('js-sha1');
const Modules = require('../modules/modules');

const modules = new Modules();

module.exports = class loginDB {
    async loginUser(string, object) {
        let users = await modules.readLogin(string, object);
        let userId = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === object.email && users[i].password === sha1(object.password)) {
                userId = users[i].id;
                break;
            }
        }
        return userId;
    };

    async createToken(string, userId) {
        let token = '';
        for (let i = 0; i < 50; i++) {
            const index = Math.round(Math.random() * 50 + 65);
            token += String.fromCharCode(index);
        }
        const tableId = await modules.updateTable(userId, token, string, 'token');
        return token;
    };

    async checkLogin(object) {
        if (!object) {
            return false;
        }
        const loggedInUser = await modules.read('customers', 'token', object);
        return loggedInUser;
    };
}



