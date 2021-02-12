

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});

  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Post, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'CASCADE',

      
    });
  
  };
  return Category;
};



