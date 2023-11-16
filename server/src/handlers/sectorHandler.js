const sectorController = require ("../controllers/sectorController");


module.exports = {

getAllSectors: async (req, res) => {
    try {
        const allSectors = await sectorController.getAllSectors();
        res.status(200).json(allSectors)
    } catch (error) {
        res.status(400).json({error: error.message});
    };
},

createSector: async (req, res) => {
    const { id_sector, name, state } = req.body;
    try {
        const newSector  = await sectorController.createSector(id_sector, name, state);
        res.status(200).json(newSector)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
};