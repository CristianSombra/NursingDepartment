const sectorController = require ("../controllers/sectorController");


module.exports = {

getAllSector: async (req, res) => {
    try {
        const allStaff = await sectorController.getAllSector();
        res.status(200).send(allStaff)
    } catch (error) {
        res.status(400).json({error: error.message});
    };
},

createSector: async (req, res) => {
    const {name} = req.body;
    try {
        const newAgent = await sectorController.createSector(name);
        res.status(200).json(newAgent)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

};