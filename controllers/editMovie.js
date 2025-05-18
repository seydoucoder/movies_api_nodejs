const mongoose = require("mongoose");

const editMovie = async (req, res) => {

    const filmModel = mongoose.model("films");
    const { nom_film, description, note } = req.body;
     const { film_id } = req.params;

    // Vérification id
    try {
        const getFilm = await filmModel.findOne({
            _id: film_id
        });
        if (!getFilm) throw "Film non trouvé !";
    } catch (e) {
        res.status(404).json({
            status: "Error",
            message: e
        });
        return;
    }

   try {
     await filmModel.updateOne(
        {
            _id: film_id
        },
        {
            nom_film: nom_film,
            description: description,
            note: note
        },
        {
            runValidators: true
        }
    );
   } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e.message
        });
        return;
   }


    res.status(200).json({
        status: "Success",
        message: "Film modifié avec succès !",
    });
}


module.exports = editMovie;