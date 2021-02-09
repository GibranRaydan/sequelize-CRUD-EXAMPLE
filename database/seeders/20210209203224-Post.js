module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          title: "You Mad?",
          content:
            "this is an example os a Post made by Gibran.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { 
          userId: 2,
          title: 'Yes I am',
          content:
            "this is an example os a Post made by Alex Trollo.",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Posts", null, {})
};