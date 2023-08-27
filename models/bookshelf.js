"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookshelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookshelf.belongsTo(models.Book, { foreignKey: "bookId" });
      Bookshelf.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Bookshelf.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shelfType: DataTypes.ENUM("want_to_read", "already_read"),
    },
    {
      sequelize,
      modelName: "Bookshelf",
    }
  );
  return Bookshelf;
};
