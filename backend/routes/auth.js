

app.post('/login', (req,res) => {
    res.json({ message: `Welcome, ${req.body.username}` })
})