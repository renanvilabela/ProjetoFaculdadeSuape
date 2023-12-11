const express = require("express");
const mongoose = require('mongoose');

const app = express()
const port = 3043

app.get("/", (req, res)=> {
    res.send(`<h1>dale boy</h1>`)
})

app.listen(port, () => {
    console.log('App running')
})