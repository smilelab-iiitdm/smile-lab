const router = require('express').Router();
let professor = require("../models/professors.model");

router.route('/').get((req,res) => {
professor.find()
    .then(profs => res.json(profs))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{

    const _id = req.body._id;
    const name = req.body.name;
    const info = req.body.info;
    const phone = req.body.phone;
    const email = req.body.email;
   
    const addProfessor = new professor({
        _id,
        name,
        info,
        phone,
        email
    });

    addProfessor.save()
        .then(() => res.json('Added Professor'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;