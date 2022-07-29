const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../db');

const settingsModel = database.define('settings', {
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
})

module.exports = settingsModel;
