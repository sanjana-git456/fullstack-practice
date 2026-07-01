

app.get('/user/:id', (req,res) => {
    res.json({ userId: req.params.id })
})

app.get('/search', (req,res) => {
    res.json({ searchedFor: req.query.name })
})