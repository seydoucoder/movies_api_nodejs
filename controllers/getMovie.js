const mongoose = require('mongoose');

const getMovie = async (req, res) => {

    const filmModel = mongoose.model("films");

    try {
        // Vérification de l'existence du film
        const film = await filmModel.findById(req.params.film_id);
        if (!film) throw "Film non trouvé !";

        res.status(200).json({
            status: "Success",
            message: "Film récupéré avec succès !",
            data: film
        });
    } catch (e) {
        res.status(404).json({
            status: "Error",
            message: e.message
        });
        return;
    }


    
}

module.exports = getMovie;