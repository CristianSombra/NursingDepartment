const staffController = require ("../controllers/staffController");


module.exports = {

getAllAgents: async (req, res) => {
    try {
        const allStaff = await staffController.getAllAgents();
        res.status(200).send(allStaff)
    } catch (error) {
        res.status(400).json({error: error.message});
    };
},

createAgent: async (req, res) => {
    const { id, image, name} = req.body;
    try {
        const newAgent = await staffController.createAgent(id, image, name);
        res.status(200).json(newAgent)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

};