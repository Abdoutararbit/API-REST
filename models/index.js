"use strict";
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var sequelize = new Sequelize({
  dialect: "mysql", // ou autre dialecte
  host: "localhost", // ou votre hôte
  username: "root", // ou votre utilisateur
  password: null, // ou votre mot de passe
  database: "your_database", // nom de votre base de données
  define: {
    timestamps: false, // Si vous ne voulez pas que Sequelize ajoute des timestamps automatiquement
  },
});

var db = {};

// Lire tous les fichiers dans le répertoire des modèles
fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== "index.js" && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    var model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

// Appliquer les associations ici
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
