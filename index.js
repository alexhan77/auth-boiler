/*********************************
 * NODE MODULES
 ********************************/

// Require needed modules
let express = require('express')
let layouts = require('express-ejs-layouts')

// Create an app instance 
let app = express()

/*********************************
 * SETTINGS / MIDDLEWARE
 ********************************/

// Set template lang to EJS
app.set('view engine', 'ejs')

// Tell express to use the layouts module
app.use(layouts)

// Set up static folder
app.use(express.static('static'))

/*********************************
 * ROUTES
 ********************************/
// Controllers
app.use('/auth', require('./controllers/auth'))

// Create a home page route (make sure its above the wildCard)
app.get('/', (req, res) => {
    res.render('home')
})
// Create a wildCard (catch-all)
app.get('*', (req, res) => {
    // res.send('This matches literally anything - great spot for an error page')
    res.render('error')
})

/*********************************
 * LISTEN
 ********************************/

// Pick a port to listen on
app.listen(3000)