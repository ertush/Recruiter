require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require("path");


const app = express();
const port = process.env.PORT || 3500;

app.use(express.static('public'));

app.get('/', async (req, res) => {
    
const data = fs.readFileSync(path.join(__dirname,'public/index.html'), {encoding: 'binary'})

res.setHeader("Content-Type", "text/html")
res.status(200).send(data);

})

app.listen(port, () => {console.log(`Server is listening on localhost:${port}`)})