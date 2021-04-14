const express   = require('express')
const mysql       = require('mysql')

const app = express()
const port = process.env.PORT || 5050

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Connect mysql

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sua"
})

//Still running
mysqlConnection.connect((err) => {
    if (!err) {
        console.log('Live and Direct from the database')
        const sql = "SELECT * FROM cohort"
        mysqlConnection.query(sql, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log(result)
            }
        })
    } else {
        console.log(err)
    }
})

