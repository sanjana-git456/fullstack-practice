require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error: ', err))

app.get('/',(req,res) => {
    res.send('Hello from Express')
})

app.get('/about', (req,res) => {
    res.json({ name: "Sanjana", role: "Fullstack Developer" })
})

app.get('/health', (req,res) => {
    res.json({ status: "ok" })
})

app.get('/user/:id', (req,res) => {
    res.json({ userId: req.params.id })
})

app.get('/search', (req,res) => {
    res.json({ searchedFor: req.query.name })
})

app.post('/login', (req,res) => {
    res.json({ message: `Welcome, ${req.body.username}` })
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})