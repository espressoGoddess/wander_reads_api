"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate("Reviews", { rating: 0 }, { rating: null });

    await queryInterface.bulkUpdate(
      "Reviews",
      { review: "" },
      { review: null },
    );

    await queryInterface.changeColumn("Reviews", "rating", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.changeColumn("Reviews", "review", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("Reviews", "rating", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("Reviews", "review", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },
};
