const { Router } = require("express");
const routes = require("./routes");
const mainRouter = Router();

mainRouter.use("/", routes);

module.exports = mainRouter;