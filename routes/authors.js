const express = require('express')
const router = express.Router()

//All authors route
router.get('/', (req, res) =>{
    res.render('authors/index') //render new page for author specifically
})

//New author route
router.get('new', (req, res) => {
    res.render('authors/new') //new page for author
})

//create author route
router.post('/', (req, res) => {
    res.send('Create') //new page for author
})

module.exports = router