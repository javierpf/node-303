"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Book",
      [
        {
          title: "Book 1",
          author: "Person 1",
          content: "The content",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          title: "Book 2",
          author: "Person 2",
          content: "The content of book 2",
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Book", [
      {
        title: "Book 1"
      },
      {
        title: "Book 2"
      }
    ]);
  }
};
