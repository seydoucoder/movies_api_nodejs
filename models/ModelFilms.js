const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    nom_film: {
        type: String,
        required: [true, "Le nom du film est requis !"],
    },
    description: {
        type: String
    },
    note:{
        type: Number
    }
});

const filmModel = mongoose.model("films", filmSchema);

module.exports = filmModel;

