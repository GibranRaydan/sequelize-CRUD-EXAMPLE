module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Comments",
      [
        {
          userId: 1,
          postId: 2,
          comment:
            "Este es un comentario de Gibran",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          postId: 1,
          comment:
            "Este es un comentario de Alex Trollo.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Comments", null, {})
};
