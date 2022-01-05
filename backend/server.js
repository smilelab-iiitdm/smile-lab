const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");

require('dotenv').config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieparser());

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
const usersRouter = require("./routes/users");
const contactsRouter = require("./routes/contacts");

app.use('/api/publications',publicationsRouter);
app.use('/api/members/professors',professorsRouter);
app.use('/api/members/undergraduates',ugRouter);
app.use('/api/members/masters',mastersRouter);
app.use('/api/members/interns',internsRouter);
app.use('/api/members/phds',phdRouter);
app.use('/api/users',usersRouter);
app.use('/api/contacts',contactsRouter);

if(process.env.NODE_ENV == "production"){
    app.use(express.static("smile-lab/build"));
    const path = require("path");
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,'smile-lab','build','index.html'));
    })
}

app.listen(PORT,()=>{
    console.log('Successful running on : %d' ,PORT);
});
