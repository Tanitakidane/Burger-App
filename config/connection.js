let mysql = require('mysql');
var util = require('util');


  


var pool = mysql.createPool({
    connectionLimit : 20,
    connectTimeout  : 60 * 60 * 1000,
    acquireTimeout   : 60 * 60 * 1000,
    timeout         : 60 * 60 * 1000,
    host: "i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ixaikiwnox3d5l3d",
    password: "frho4fhq7hzcg59p",
    database : "h5yfkr5ixjcgtlrn",
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