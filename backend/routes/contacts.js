const router = require('express').Router();
let contacts = require("../models/contacts.model");

router.route('/').get((req,res) => {
contacts.find()
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;