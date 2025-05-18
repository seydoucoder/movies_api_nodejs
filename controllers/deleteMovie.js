const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
    const filmModel = mongoose.model("films");
    const { film_id } = req.params.film_id;
    
    const getFilm = await filmModel.findOne({
        _id: film_id
    });

    try {
        if (!getFilm) throw "Film non trouvé !";
    } catch (e) {
        res.status(404).json({
            status: "Error",
            message: e
        });
        return;
    }

    try {
        await filmModel.deleteOne({ _id: film_id });
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message
        });
        return;
    }

    res.status(200).json({
        status: "Success",
        message: "Film supprimé avec succès !",
    });
}


module.exports = deleteMovie;