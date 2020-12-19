const express = require('express')
const dotenv = require('dotenv')

const userRouter = require('./routes/userRoute')
const stateRouter = require('./routes/stateRoute')
const districtRouter = require('./routes/districtRoute')
const childRouter = require('./routes/childRoute')

dotenv.config();

require('./db/mongoose')

//Setting up express and port number for both local and heroku app
const app = express()
const port = process.env.PORT || 3000


//To recognize the incoming object body as a json object
app.use(express.json())

//Setting up the router
app.use('/user', userRouter)
app.use('/state', stateRouter)
app.use('/district', districtRouter)
app.use('/child', childRouter)

//Server setup
app.listen(port, () => {
    console.log(`The server is running at port ${port}`)
})
