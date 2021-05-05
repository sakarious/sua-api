const express = require('express')
const mysqlConnection = require('./connection')
const peopleRoute = require('./routes/people')
const path = require('path')

const app = express()
const port = process.env.PORT || 5050


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/cohort/add', express.static(path.join(__dirname + '/views')))

app.use('/cohort', peopleRoute)

app.listen(port, () => {
    console.log('Successfully connected to server and running on ', port)
})


