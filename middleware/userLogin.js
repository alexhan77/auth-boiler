module.exports = (req, res, next) => {
    
    if(req.user) {
        // GOOD - they are logged in! (if it passes the IF statement)
        next() // Proceed as planned (basically just go on to the next thing)
    }
    else {
        // BAD - they are not logged in! (add a flash message as well)
        // Send an error message + send them (redirect) to the login page
        req.flash('error', 'You must be logged in to view that page')
        res.redirect('/auth/login')
    }
}
