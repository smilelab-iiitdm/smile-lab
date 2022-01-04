const router = require('express').Router();
let interns = require("../models/interns.model");

router.route('/').get((req,res) => {
interns.find()
    .then(intern => res.json(intern))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{
    const _id = req.body._id;
    const name = req.body.name;
    const desc = req.body.desc;
    const researchInterest = req.body.researchInterest;
    const education = req.body.education;
    const email = req.body.email;
   
    const addIntern = new interns({
        _id,
        name,
        desc,
        researchInterest,
        education,
        email
    });

    addIntern.save()
        .then(() => res.json('Added Interns'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;