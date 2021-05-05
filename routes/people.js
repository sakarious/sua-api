const express = require('express')
const mysqlConnection = require('../connection')
const path = require('path')

const route = express.Router()

//Get every SUA cohort member
route.get('/', (req, res) => {
            const sql = "SELECT * FROM cohort"
            mysqlConnection.query(sql, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('Live and Direct from the database')
                    res.send(result)  //result from DB
                }
            })
})
//Get a specific number of Member
route.get('/:id', (req,res) => {
    let id = req.params.id
    const sql = `SELECT * FROM cohort LIMIT 0, ${id}`
    mysqlConnection.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//Get all cohort Member in a specific track
route.get('/track/:track_name', (req, res) => {
    let track = req.params.track_name
    let sql = "SELECT * FROM cohort WHERE track = '"+track+"'"
    mysqlConnection.query(sql, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})

//Add a cohort member
route.post('/', (req,res) => {
    let name = req.body.name
    let sex = req.body.sex
    let track = req.body.track
    const sql = "INSERT INTO cohort (name, sex, track) VALUE ('"+name+"','"+sex+"','"+track+"')"
    if (req.body && req.body.sex && req.body.track){
        mysqlConnection.query(sql, (err)=> {
            if (err) {
                console.log(err)
            } else {
                res.redirect('/cohort')
            }
        })
    } else {
        res.send('Invalid Input')
    }
})

module.exports = route
