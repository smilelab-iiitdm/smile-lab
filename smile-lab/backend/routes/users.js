const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

const router = require('express').Router();
let users = require("../models/users.model");

//Route to get user data
// router.route('/').get((req,res) => {
// users.find()
//     .then(user => res.json(user))
//     .catch(err => res.status(400).json('Error: '+err));
// });

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
            res.status(200).json({message: 'Added User'})
    }
    catch (err) {
        console.log(err);
    }
});

router.post('/login',async (req,res) => {
    try{
        let token;
        const {username,password} = req.body;

        if(!username || !password){
            return res.status(400).json({error:"Please fill all the fields"});
        }

        const userLogin = await users.findOne({ username: username});

        if(userLogin)
        {
            const isMatch = await bcrypt.compareSync(password,userLogin.password)

            token = await userLogin.generateAuthToken();

            res.cookie('WebToken',token,{expires: new Date(Date.now()+258952000000), httpOnly: true })

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

router.get('/logout', (req,res) => {
    // console.log("Successful Logout");
    res.clearCookie('WebToken',{path: '/'});
    res.status(200).send("User Successfully Logged Out");
})


module.exports = router;