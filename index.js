/****************
 * NODE MODULES
 ****************/

//fillout barebones statement 

let express = require('express')
let flash = require('connect-flash')
let layouts = require('express-ejs-layouts')
let session = require('express-session')

//Create an express instance
let app = express();

/**********************
 * SERTTINGS/MIDDLEWARE
 **********************/

//set template lang to ejs 
app.set('view engine', 'ejs')

//tell express to use the layout modules
app.use(layouts)

//set up static folder
app.use(express.static('static'))

// decrypt the variables coming in via POST routes (from forms)
app.use(express.urlencoded({ extended: false }))

// Set up sessions 
app.use(session({
    secret: 'any string is fine',
    resave: false,
    saveUninitialized: true
}))

// Set up connect-flash for the flash alert messages (depends on session, order matters here)
app.use(flash())


// Custom middleware - make certain variables available to EJS pages through locals
app.use((req, res, next) => {
    res.locals.alerts = req.flash()
    next()
})

/*****************************
 * ROUTES
 *****************************/

//Controllers
app.use('/auth', require('./controllers/auth'))

//create a home route
app.get('/', (req, res) => {
    res.render('home')
})

 //create a wild card route (catch-all)
app.get('*', (req, res) => {
    res.render('error')
})

/******************
 * LISTEN
 ******************/

//Pick a port to listen on 
app.listen(3000)