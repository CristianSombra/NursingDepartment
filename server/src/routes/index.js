const { Router } = require("express");
const mainRouter = Router();


const agentsRouter = require('./agentsRouter');
const sectorRouter = require('./sectorRouter');


mainRouter.use("/agents", agentsRouter);
mainRouter.use("/sector", sectorRouter);

module.exports = mainRouter;