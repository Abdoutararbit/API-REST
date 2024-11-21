"use strict";
module.exports = (sequelize, DataTypes) => {
  var Like = sequelize.define(
    "Like",
    {
      messageId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Message", // Assurez-vous que le modèle Message est bien chargé
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User", // Assurez-vous que le modèle User est bien chargé
          key: "id",
        },
      },
      isLike: DataTypes.INTEGER,
    },
    {}
  );

  Like.associate = function (models) {
    // Associations entre les modèles
    models.User.belongsToMany(models.Message, {
      through: models.Like,
      foreignKey: "userId",
      otherKey: "messageId",
    });

    models.Message.belongsToMany(models.User, {
      through: models.Like,
      foreignKey: "messageId",
      otherKey: "userId",
    });

    models.Like.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });

    models.Like.belongsTo(models.Message, {
      foreignKey: "messageId",
      as: "message",
    });
  };

  return Like;
};
