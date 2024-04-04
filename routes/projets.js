var express = require('express');
var router = express.Router();

const Projet = require("../models/projets");


/* GET home page. */
router.get("/", async (req, res) => {

    try {
        const projets = await Projet.find();
        res.json({ result: true, projets });
    } catch (error) {
        res.json({ result: false, error });
    }

});

module.exports = router;
