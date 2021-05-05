const mysql = require('mysql')

//Connect to Database
const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sua"
})

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('Successfully Connected to Database')
    } else {
        console.log(err)
    }
})

module.exports = mysqlConnection