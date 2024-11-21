module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  User.associate = function (models) {
    // Définir les associations ici
    User.belongsToMany(models.Message, {
      through: models.Like,
      foreignKey: "userId",
      otherKey: "messageId",
    });
  };

  return User;
};
