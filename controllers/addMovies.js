const mongoose = require('mongoose');

const addMovie = async (req, res) =>{

    const filmModel = mongoose.model("films");

    const {nom_film, description, note} = req.body;
    
    // Vérification des champs
    try {
        // if(!nom_film) throw "Le nom du film est requis !";
        if(!description) throw "La description du film est requise !";
        if(!note) throw "La note du film est requise !";
        if(note < 0 || note > 10) throw "La note doit être comprise entre 0 et 10 !";
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e
        });
        return;
    }

    try{
        // Création du film
        const newFilm = await filmModel.create({
            nom_film: nom_film,
            description: description,
            note: note
        });

        console.log(newFilm);
    } catch (e) {
        res.status(500).json({
            status: "Error",
            message: e.message
        });
        return;
    }

    

    res.status(200).json({
        status: "Success",
        message: "Film ajouté avec succès !",
    });

}

module.exports = addMovie;