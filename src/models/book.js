"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author, { foreignKey: "authorId" });

      Book.hasMany(models.Bookshelf, { foreignKey: "bookId" });
      Book.hasMany(models.Review, { foreignKey: "bookId" });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      coverUrl: DataTypes.STRING,
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
