const mongoose = require('mongoose');

const getAllMovies = async (req, res) => {

    const filmModel = mongoose.model("films");

    try {
        // Récupération de tous les films
        const films = await filmModel.find();
        if (!films) throw "Aucun film trouvé !";

        res.status(200).json({
            status: "Success",
            message: "Films récupérés avec succès !",
            data: films
        });
    } catch (e) {
        res.status(404).json({
            status: "Error",
            message: e.message
        });
        return;
    }
}

module.exports = getAllMovies;