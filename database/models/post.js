const { post } = require("../../routes");
const category = require("./category");

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
     
  }, {});
  
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
      onDelete: 'CASCADE',
    });

    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    })

    Post.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'CASCADE',

    })
  };
  return Post;
};
