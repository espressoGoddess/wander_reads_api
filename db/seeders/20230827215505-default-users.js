"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "amber@espressogoddess.dev",
          name: "Amber",
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "nsollenberger@gmail.com",
          name: "Nathan",
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Users_id_seq" RESTART WITH 3',
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
