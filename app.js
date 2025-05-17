const express = require("express");
require("dotenv").config();

const addMovie = require("./controllers/addMovies");

const mongose = require("mongoose");

// Connexion à la base de données
mongose.connect(process.env.mongo_connection, {})
    .then(() => {
        console.log("Connexion à la base de données réussie !");
    }).catch((err) => {
        console.log("Erreur de connexion à la base de données :", err);
    });

const app = express();

//Routes

app.post("/api/movies", addMovie);


app.listen(8000,()=>{
    console.log("Serveur demare !");
    
});