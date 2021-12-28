const router = require('express').Router();
let users = require("../models/users.model");

router.route('/').get((req,res) => {
users.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
   
    const addUser = new users({
        username,
        password
    });

    addUser.save()
        .then(() => res.json('Added User'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;