const { Router } = require('express');
const { getAllSectors, createSector } = require('../handlers/sectorHandler');
const sectorRouter = Router();

sectorRouter.get('/', getAllSectors);
sectorRouter.post('/newsector', createSector)

module.exports = sectorRouter;