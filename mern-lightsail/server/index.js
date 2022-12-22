const express = require('express')
const cors = require('cors');
const app = express()
const port = 8000

app.use(cors());

app.get("/", (req, res) => {
    res.json({number: new Number((Math.random() * 10).toFixed(2))});
});

app.listen(port, () => {
    console.log("Server started!")
});