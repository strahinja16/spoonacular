
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UsersRecipes', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      UserId: {
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      RecipeId: {
        type: Sequelize.UUID,
        references: {
          model: 'Recipes',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => queryInterface.dropTable('UsersRecipes'),
};
