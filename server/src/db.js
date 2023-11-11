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

// Relación muchos a uno (un agente pertenece a un sector)
Agents.belongsTo(Sector, { foreignKey: 'sectorId' });

// Relación muchos a muchos (un sector puede tener varios agentes, y un agente puede pertenecer a varios sectores)
Sector.belongsToMany(Agents, { through: 'SectorAgents', foreignKey: 'sectorId', as: 'Agents' });
Agents.belongsToMany(Sector, { through: 'SectorAgents', foreignKey: 'agentId', as: 'Sectors' });

module.exports = {
  sequelize,
  ...sequelize.models
};
