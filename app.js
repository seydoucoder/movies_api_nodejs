const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovies");

const mongose = require("mongoose");
const getAllMovies = require("./controllers/getAllMovies");
const getMovie = require("./controllers/getMovie");

// Connexion à la base de données
mongose.connect(process.env.mongo_connection, {})
    .then(() => {
        console.log("Connexion à la base de données réussie !");
    }).catch((err) => {
        console.log("Erreur de connexion à la base de données :", err);
    });

const app = express();

app.use(express.json());

//Models ...
require("./models/ModelFilms");


//Routes

app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get('/api/movies/:film_id', getMovie);


app.listen(8000, () => {
    console.log("Serveur demarré !");
});