'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('settings', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: Sequelize.STRING,
      document: Sequelize.TEXT('long'),
      evento: Sequelize.STRING,
      votante: Sequelize.STRING
    }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('settings');
  }
};
