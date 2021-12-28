const router = require('express').Router();
let phds = require("../models/phd.model");

router.route('/').get((req,res) => {
phds.find()
    .then(phd => res.json(phd))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{
    const _id = req.body._id;
    const name = req.body.name;
    const desc = req.body.desc;
    const researchInterest = req.body.researchInterest;
    const education = req.body.education;
    const email = req.body.email;
   
    const addPhd = new phds({
        _id,
        name,
        desc,
        researchInterest,
        education,
        email
    });

    addPhd.save()
        .then(() => res.json('Added Phd Student'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;