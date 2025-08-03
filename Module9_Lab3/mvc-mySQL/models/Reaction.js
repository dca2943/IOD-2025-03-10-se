const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reaction extends Model {}

Reaction.init(
  {
    type: {
      type: DataTypes.ENUM("like"),
      defaultValue: "like",
    },
  },
  {
    sequelize,
    modelName: "reaction",
  }
);

module.exports = Reaction;
