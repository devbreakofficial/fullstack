import express from 'express'
import morgan from 'morgan'

const app = express()

// Middlewares
app.use(morgan('dev'))

// Routes
app.get('/api/message', (req, res) => {
  res.json({
    msg: 'hello from the server',
  })
})

app.listen(5000, () => {
  console.log('server is running on port 5000')
})
