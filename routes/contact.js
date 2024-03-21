var express = require('express');
var router = express.Router();

const Contact = require('../models/contact');

router.post('/', async (req, res) => {

    try {
        const newContact = new Contact({
            name: req.body.name,
            firstName: req.body.firstName,
            society: req.body.society,
            tel: req.body.tel,
            mail: req.body.mail,
            message: req.body.message
        })

        const contact = await newContact.save()

        res.json({ result: true, contact })

    } catch(error) {

        res.json({ result: false, error })

    }


});

module.exports = router;
