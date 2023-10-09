const { Sequelize } = require('sequelize');
const AgentsModel = require('./models/agents');
const SectorModel = require('./models/sector');
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

AgentsModel(sequelize);
SectorModel(sequelize);

const {
    Agents, 
    Sector,
} = sequelize.models;


Agents.belongsTo(Sector, { foreignKey: 'sectorId' });


module.exports = {
    sequelize, ...sequelize.models
};