const express = require('express')

require('./db/mongoose')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req, res) =>{
  res.send('Hello, This is a task manager api')
})

app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})