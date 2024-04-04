const mongoose = require('mongoose');

const projetSchema = mongoose.Schema({

    projectName: String,
    stack: [String],
    collabs: [String],
    year: String,
    logo: String,
    screens: [{}],
    link: String,
    desc: String,
    projet: String,
    story: String,

});

const Projet = mongoose.model('projets', projetSchema);

module.exports = Projet;