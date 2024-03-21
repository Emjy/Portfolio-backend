const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    name: String,
    firstName: String,
    society: String,
    tel: String,
    mail: String,
    message: String,

});

const Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;