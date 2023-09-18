const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.route')
require('./config/db')
const app = express();


// Middleware
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/users', userRouter)



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/./views/index.html')
})

// not found route
app.use((req, res, next) => {
    res.status(404).json({message: "Route Not Found"})
})

// server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'Something is Wrong'
    })
})


module.exports = app;
