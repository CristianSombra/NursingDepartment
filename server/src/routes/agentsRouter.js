const { Router } = require('express');
const { getAllAgents, getAgentById , createAgent } = require('../handlers/agentsHandler');
const agentsRouter = Router();


agentsRouter.get('/', getAllAgents);
agentsRouter.get('/:id', getAgentById);
agentsRouter.post('/newagent', createAgent);

module.exports = agentsRouter;