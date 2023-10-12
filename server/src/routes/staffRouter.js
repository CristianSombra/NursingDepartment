const { Router } = require('express');
const { getAllAgents, createAgent } = require('../handlers/staffhandler');
const staffRouter = Router();


staffRouter.get('/', getAllAgents);
staffRouter.post('/', createAgent);

module.exports = staffRouter;