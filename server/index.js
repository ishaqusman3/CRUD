const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Hello My Server is Running at Port ${PORT}`);
})