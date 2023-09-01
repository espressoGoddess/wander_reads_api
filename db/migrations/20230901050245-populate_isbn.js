"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (t) => {
      await queryInterface.addColumn("Books", "isbn", Sequelize.STRING, {
        transaction: t,
      });
      await queryInterface.sequelize.query(`UPDATE "Books" SET isbn=''`, {
        transaction: t,
      });
      await queryInterface.changeColumn(
        "Books",
        "isbn",
        { type: Sequelize.STRING, allowNull: false },
        { transaction: t },
      );
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Books", "isbn");
  },
};
