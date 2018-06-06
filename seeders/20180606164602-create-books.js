

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'Books',
    [
      {
        title: 'Book 1',
        author: 'Person 1',
        content: 'The content',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Book 2',
        author: 'Person 2',
        content: 'The content of book 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),
  down: (queryInterface) => {
    queryInterface.bulkDelete('Books', [
      {
        title: 'Book 1',
      },
      {
        title: 'Book 2',
      },
    ]);
  },
};
