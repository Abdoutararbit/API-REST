module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    content: DataTypes.STRING,
  });

  Message.associate = function (models) {
    // Définir les associations ici
    Message.belongsToMany(models.User, {
      through: models.Like,
      foreignKey: "messageId",
      otherKey: "userId",
    });
  };

  return Message;
};
