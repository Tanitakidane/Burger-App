let mysql = require('mysql');
var util = require('util');


  


var pool = mysql.createPool({
    connectionLimit : 20,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout   : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    host: "qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "xagml685sgf7faaz",
    password: "yiuerj1w1wf0pou5",
    database : "qbz2qk4chwieh54w",
})






pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.log('Database connection was closed.',new Date())

        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
           console.log('Database has too many connections.',new Date())
        }
        if (err.code === 'ECONNREFUSED') {
           console.log('Database connection was refused.',new Date())
        }
    }
    if (connection) connection.release()
   
    return
})
pool.query = util.promisify(pool.query) // Magic happens here.
module.exports=pool;