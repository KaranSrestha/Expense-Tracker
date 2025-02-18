const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log("app started at 3000");
})