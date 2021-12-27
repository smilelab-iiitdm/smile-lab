const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const ATLAS_URI = "ATLAS_URI = mongodb+srv://iamroot:inmBBK65@cluster0.9kg18.mongodb.net/myFirstDatabase?retryWrites=true";

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
// mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("DataBase connection Established");
});

const publicationsRouter = require("./routes/publications");
const professorsRouter = require("./routes/professors");
const ugRouter= require("./routes/undergraduates");
const mastersRouter = require("./routes/masters");
const internsRouter = require("./routes/interns");
const phdRouter = require("./routes/phds");

app.use('/publications',publicationsRouter);
app.use('/professors',professorsRouter);
app.use('/undergraduates',ugRouter);
app.use('/masters',mastersRouter);
app.use('/interns',internsRouter);
app.use('/phds',phdRouter);

app.listen(port,()=>{
    console.log('Successful running on : %d' ,port);
});
