module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Gibran Crack',
        email: 'Gibran@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alex Trollo',
        email: 'Alex@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};