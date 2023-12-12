const express = require("express");
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3043
mongoose.connect('mongodb+srv://vilabelarenan:XJI7RWu8gaLPX6ur@securitysuape.wpwnbix.mongodb.net/?retryWrites=true&w=majority');

const data = mongoose.model('teste', {
    title: String,
    description: String,
    image_url: String,
    url: String,
});

app.get("/", (req, res)=> {
    res.send('app funcionando')
});

app.post("/", async (req, res) => {
    const data = new data({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        url: req.body.url
    })

    await data.save
    res.send(data)
})

app.listen(port, () => {
    console.log('App running')
})