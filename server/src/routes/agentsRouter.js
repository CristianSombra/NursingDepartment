const { Router } = require('express');
const { getAllAgents, createAgent } = require('../handlers/agentsHandler');
const agentsRouter = Router();


agentsRouter.get('/', getAllAgents);
agentsRouter.post('/newagent', createAgent);

module.exports = agentsRouter;