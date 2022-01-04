const router = require('express').Router();
let ugs = require("../models/ug.model");

router.route('/').get((req,res) => {
ugs.find()
    .then(undergrads => res.json(undergrads))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{
    const _id = req.body._id;
    const name = req.body.name;
    const desc = req.body.desc;
    const researchInterest = req.body.researchInterest;
    const education = req.body.education;
    const email = req.body.email;
   
    const addUgs = new ugs({
        _id,
        name,
        desc,
        researchInterest,
        education,
        email
    });

    addUgs.save()
        .then(() => res.json('Added Undergraduate'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;