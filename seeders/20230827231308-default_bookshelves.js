"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          bookId: 1,
          rating: 8,
          review: "Excellent work of book words and everyning wow",
        },
        {
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          bookId: 4,
          rating: 9,
          review: "Meow",
        },
        {
          id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          bookId: 5,
          rating: 7,
          review: "I cried",
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Bookshelves",
      [
        {
          id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          bookId: 1,
          shelfType: "already_read",
        },
        {
          id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          bookId: 4,
          shelfType: "already_read",
        },
        {
          id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          bookId: 5,
          shelfType: "already_read",
        },
        {
          id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          bookId: 2,
          shelfType: "want_to_read",
        },
        {
          id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          bookId: 7,
          shelfType: "want_to_read",
        },
        {
          id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          bookId: 5,
          shelfType: "already_read",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reviews", null, {});
  },
};
