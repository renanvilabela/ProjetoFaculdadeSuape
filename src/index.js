const express = require("express")

const app = express()
const port = 3000

app.get("/", (req, res)=> {
    res._send("DALE BOY")
})

app.listen(port, () => {
    console.log('App running')
})