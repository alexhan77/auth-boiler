let router = require('express').Router()
let db = require('../models')

router.get('/post', (req, res) => {
    res.render('feed/post')
})

// Route visits the feed 
router.get('/', (req, res) => {
    db.feed.findAll({
        include: [db.user],

    })
        .then(feed => {
            console.log(feed.users)
            res.render('feed/index', { feed })
        })
})

router.post('/post', (req, res) => {
    console.log(req.body)
    db.feed.create({
        userId: req.body.userId,
        pic: req.body.url,
        content: req.body.content
    })
        .then(func => {
            res.send('This route should let users be able to post by taking data from form')
        })

})


module.exports = router