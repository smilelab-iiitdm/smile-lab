const router = require('express').Router();
let publication = require("../models/publication.model");

router.route('/').get((req,res) => {
publication.find()
    .then(pubs => res.json(pubs))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res) =>{

    const title = req.body.title;
    const desc = req.body.desc;
    const category = req.body.category;
    const volume = req.body.volume;
    const pages = req.body.pages;
    const year = req.body.year;
    const doi = req.body.doi;
    const authors = req.body.authors;
   
    const addPublication = new publication({
        title,
        desc,
        category,
        volume,
        pages,
        year,
        doi,
        authors
    });

    addPublication.save()
        .then(() => res.json('Added Publication'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;