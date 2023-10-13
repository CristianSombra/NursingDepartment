const { Router } = require('express');
const { getAllSectors, createSector } = require('../handlers/sectorHandler');
const sectorRouter = Router();

sectorRouter.get('/', getAllSectors);
sectorRouter.post('/', createSector)

module.exports = sectorRouter;