const { Router } = require("express");
const mainRouter = Router();

const staffRouter = require('./StaffRouter');
const sectorRouter = require('./sectorRouter');

mainRouter.use("/staff", staffRouter);
mainRouter.use("/sector", sectorRouter);

module.exports = mainRouter;