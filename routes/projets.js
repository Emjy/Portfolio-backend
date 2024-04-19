var express = require('express');
var router = express.Router();

const Projet = require("../models/projets");


// Get de tous les projets 
router.get("/", async (req, res) => {

    try {
        const projets = await Projet.find().sort({ number: -1 });

        res.json({ result: true, projets });
    } catch (error) {
        res.json({ result: false, error });
    }

});

// Get d'un projet 
router.get("/:id", async (req, res) => {

    try {
        const projet = await Projet.findById(req.params.id);

        res.json({ result: true, projet });
    } catch (error) {
        res.json({ result: false, error });
    }

});

module.exports = router;
