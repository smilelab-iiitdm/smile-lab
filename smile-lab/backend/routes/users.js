const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const router = require('express').Router();
let users = require("../models/users.model");



router.route('/').get((req,res) => {
users.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: '+err));
});

router.post('/register',async (req,res) => {
    const {username, password} = req.body;
    if( !username || !password)
    {
        return res.status(422).json({error:'Please Fill all the Fields'});
    } 

    try{
        const userExist = await users.findOne({username:username});
        
        if(userExist)
        {
            return res.status(422).json({error:"Username already taken"});
        }

        const addUser = new users({
            username,
            password
        });

        await addUser.save();
            // .then(() => 
            res.status(200).json({message: 'Added User'})
            // .catch(err => res.status(400).json('Error: '+ err));
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/login',async (req,res) => {
    try{
        let token,hashed;
        const {username,password} = req.body;

        if(!username || !password){
            return res.status(400).json({error:"Please fill all the fields"});
        }

        const userLogin = await users.findOne({ username: username});

        if(userLogin)
        {
            console.log("I am called")
            // const isMatch = await bcrypt.compare(password,userLogin.password)
            const isMatch = password===userLogin.password

            token = await userLogin.generateAuthToken();
            console.log(token)

            res.cookie("jstoken",token,{
                httpOnly: true
            });

            if(!isMatch) {
                res.status(400).json({error:'Wrong Credentials'});
            }
            else {
                res.json({message:'Successful Login'});
            }
        }else{
            res.status(400).json({error:'Wrong Credentials'});
        }

        
    } catch(err) {
        console.log(err);
    }
})


module.exports = router;