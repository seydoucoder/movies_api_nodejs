const mongoose = require("mongoose");

const editMovie = async (req, res) => {

    const filmModel = mongoose.model("films");
    const { film_id, nom_film, description, note } = req.body;

    // Vérification id
    try {
        if (!film_id) throw "L'id du film est requis !";
    } catch (e) {
        res.status(400).json({
            status: "Error",
            message: e
        });
        return;
    }

   try {
     await filmModel.updateOne(
        {
            _id:film_id,
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