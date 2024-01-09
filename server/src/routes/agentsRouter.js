const { Router } = require('express');
const { getAllAgents, getAgentById, getAgentByName, createAgent } = require('../handlers/agentsHandler');
const agentsRouter = Router();


agentsRouter.get('/', getAllAgents);
agentsRouter.get('/:id', getAgentById);
agentsRouter.get('/agent', getAgentByName);
agentsRouter.post('/newagent', createAgent);

module.exports = agentsRouter;