const express = require('express')
const router = express.Router()
const PORT = 3333
const User = require('../models/user')

const mongoose = require('mongoose')
const { updateJsxSpreadAttribute } = require('typescript')
const db = "mongodb+srv://Dale:Dunkers0610@eventsdb.xbhgvsb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})
router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registerUser) =>{
        if(error) {
            console.log(error)
        } else {
            res.status(200).send(registerUser)
        }
    })
})

router.post('login', (req, res) =>{
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if (error){
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            } else 
                if( user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
                }
        }
    })
})

module.exports = router