// likesCtrl.js

// Importation des modèles
var models = require("../models");

module.exports = {
  likePost: function (req, res) {
    var messageId = req.params.messageId;

    // Logique pour liker un message
    models.Message.findOne({ where: { id: messageId } })
      .then(function (message) {
        if (!message) {
          return res.status(404).json({ error: "Message not found" });
        }
        // Ajout de la logique pour le "like"
        message.increment("likesCount");
        return res.status(200).json({ message: "Post liked successfully" });
      })
      .catch(function (err) {
        return res.status(500).json({ error: "An error occurred" });
      });
  },

  dislikePost: function (req, res) {
    var messageId = req.params.messageId;

    // Logique pour disliker un message
    models.Message.findOne({ where: { id: messageId } })
      .then(function (message) {
        if (!message) {
          return res.status(404).json({ error: "Message not found" });
        }
        // Ajout de la logique pour le "dislike"
        message.decrement("likesCount");
        return res.status(200).json({ message: "Post disliked successfully" });
      })
      .catch(function (err) {
        return res.status(500).json({ error: "An error occurred" });
      });
  },
};
