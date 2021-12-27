const router = require('express').Router();
let masters = require("../models/masters.model");

router.route('/').get((req,res) => {
masters.find()
    .then(undergrads => res.json(undergrads))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{
    const _id = req.body._id;
    const name = req.body.name;
    const desc = req.body.desc;
    const researchInterest = req.body.researchInterest;
    const education = req.body.education;
    const email2 = req.body.email2;
    const email = req.body.email;
   
    const addMasters = new masters({
        _id,
        name,
        desc,
        researchInterest,
        education,
        email,
        email2
    });

    addMasters.save()
        .then(() => res.json('Added Masters Students'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;