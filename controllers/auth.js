// Node Modules/Variables
let router = require('express').Router()

// Routes 
router.get('/login', (req, res) => {
    res.render('auth/login')
})

// POST /auth/login - this is a place for the logn form to post to 
router.post('/login', (req, res) => { 
    console.log('DATA', req.body)
    res.send('Hello from the post route!')
})


router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

// Export (allow me to include this in another page)
module.exports = router