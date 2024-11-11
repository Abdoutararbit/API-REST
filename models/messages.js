"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MESSAGES extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.MESSAGES.belongsTo(models.USERS, {
        foreignKey: {
          alloNull: false,
        },
      });
    }
  }
  MESSAGES.init(
    {
      idUSERS: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      attachement: DataTypes.STRING,
      likes: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "MESSAGES",
    }
  );
  return MESSAGES;
};
