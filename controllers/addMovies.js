

const addMovie = (req, res) =>{

    res.status(200).json({
        status: "Film ajouté avec succès !"
    });

}

module.exports = addMovie;