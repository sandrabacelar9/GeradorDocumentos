'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const settingsId = await queryInterface.rawSelect('settings', { where: {}, limit: 1 }, ['id']);
    if (!settingsId) {
      return queryInterface.bulkInsert('settings', [{
        name: 'Carta de boas vindas',
        document: 'Olá %nome% seja bem vindo a eleição %nome_evento%', 
        evento: 'Eleição da Pandora',
        votante: 'Jose da Silva',      
      }]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('settings', null, {});
  }
};