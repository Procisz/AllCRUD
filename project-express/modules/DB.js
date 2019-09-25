const mariadb = require('mariadb');
const pool = mariadb.createPool({
    user: 'root',
    password: 'root',
    database: 'webshop', // Ez az adatbázisunk neve
    connectionLimit: 5
});

module.exports = class DB {
    constructor() {
        pool.getConnection().then(conn => this.conn = conn);
    };


    /**
<<<<<<< HEAD
     * readAll and read method, get data from database
     * @param {string} table table name
     * @param {number} id 
     */
=======
       * readAll and read method, get data from database
       * @param {string} table table name
       * @param {number} id 
       */
>>>>>>> card03


    async readAll(table) {
        const sql = `
             SELECT * 
             FROM ${table}
             `;
        const result = await this.conn.query(sql);
        return result;
    };

<<<<<<< HEAD
=======

>>>>>>> card03
    async readOne(table, id) {
        const sql = `
             SELECT * 
             FROM ${table}
             WHERE id=${id}
      `;
        const result = await this.conn.query(sql);
<<<<<<< HEAD
        return result[0];
    };

    async readOneSeo(table, seoFriendlyName) {
        const sql = `
             SELECT * 
             FROM ${table}
             WHERE seoFriendlyProductName='${seoFriendlyName}'
      `;
        const result = await this.conn.query(sql);
        return result[0];
    };


    /**
     * Create method for database
     * @param {string}  table table name
     * @param {object} object object from req.body, keys are the column names of the table, rows are the values
     */
=======
        console.log(`readAll ${result}`);
        return result[0];
    }


    /**
       * Create method for database
       * @param {string}  table table name
       * @param {object} object object from req.body, keys are the column names of the table, rows are the values
       */
>>>>>>> card03

    async create(object, table) {
        let columnNames = '';
        let rowValues = '';

        for (let key in object) {
            columnNames += `${key}, `;
            if (typeof object[key] === 'number') {
                rowValues += `${object[key]}, `;
            } else {
                rowValues += `'${object[key]}', `;
            }
        }
        columnNames = columnNames.slice(0, columnNames.length - 2);
        rowValues = rowValues.slice(0, rowValues.length - 2);

        const sql = `
            INSERT INTO ${table} 
            (${columnNames})
            VALUES
            (${rowValues})
`;
        const result = await this.conn.query(sql);
        return result;
    }


    /**
<<<<<<< HEAD
     * update method for database
     * @param {string}  table table name
     * @param {object} object req.body, keys are the column names of the table, rows are the values
     */
=======
          * update method for database
          * @param {string}  table table name
          * @param {object} object req.body, keys are the column names of the table, rows are the values
          */
>>>>>>> card03

    async update(object, table) {
        let objectToString = '';

        for (let key in object) {
            objectToString += `${key} = `;
            if (typeof object[key] === 'number') {
                objectToString += `${object[key]}, `;
            } else {
                objectToString += `'${object[key]}', `;
            }
        }
        objectToString = objectToString.slice(0, objectToString.length - 2);

        const sql = `
            UPDATE ${table} 
            SET
            ${objectToString}
            WHERE id=${object.id}
        `;
        const result = await this.conn.query(sql);
        return result;
    };


    /**
<<<<<<< HEAD
     * Create method for database
     * @param {string}  table table name
     * @param {object} object object from req.body, keys are the column names of the table, rows are the values
     */
=======
           * Create method for database
           * @param {string}  table table name
           * @param {object} object object from req.body, keys are the column names of the table, rows are the values
           */
>>>>>>> card03

    async delete(table, object) {
        let sql = `
            DELETE FROM ${table}
            WHERE id = ${object.id}
        `;
        const result = await this.conn.query(sql);
        return result;
    };


    /**
<<<<<<< HEAD
     * read data from SQL for restful end
     * @param {string} table name of the table
     * @param {number} object name of the column
     */
=======
   * read data from SQL for restful end
   * @param {string} table name of the table
   * @param {number} object name of the column
   */
>>>>>>> card03

    async readRestful(table, object) {
        const sql = `
        SELECT ${object}
        FROM ${table}
        `;
        const result = await this.conn.query(sql);
        return result;
    }


    /**
<<<<<<< HEAD
     * write data in SQL for restful end
     * @param {string} table name of the table
     * @param {number} object name of the column
     * UNDER CONSTRUCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     */
=======
      * write data in SQL for restful end
      * @param {string} table name of the table
      * @param {number} object name of the column
      * UNDER CONSTRUCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      */
>>>>>>> card03

    async writeRestful() {
        const sql = `
        UPDATE
        SET
        WHERE
        `;
        const result = await this.conn.query(sql);
        return result;
    }
};
