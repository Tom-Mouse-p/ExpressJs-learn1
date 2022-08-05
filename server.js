const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', "ejs")

// app.use(logger)

// app.get('/', logger, (req, res) => {
//     // res.download('server.js')
//     // res.json({ message: "Error" })
//     // res.send("Main Page!")
//     res.render("index", { text: "main" })
// })

const userRouter = require('./routes/users')
app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}



app.listen(3000)