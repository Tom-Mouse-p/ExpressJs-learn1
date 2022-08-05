const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("/users here!")
})

router.get('/new', (req, res) => {
    res.render("users/new", { firstName: "Pran" })
})

router.post('/', (req, res) => {
    console.log(req.body.firstName);
    res.send("Subbmited!")
})

router.route('/:id').get((req, res) => {
    // console.log(req.user);
    res.send(`Get User with id ${req.params.id}`)
}).put((req, res) => {
    res.send(`Update User with id ${req.params.id}`)
}).delete((req, res) => {
    res.send(`Delete User with id ${req.params.id}`)
})

const users = [{ name: "Pranav" }, { name: "Sumit" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


module.exports = router