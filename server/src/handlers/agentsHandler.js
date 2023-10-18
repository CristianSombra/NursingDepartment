const agentsController = require ("../controllers/agentsController");


module.exports = {

getAllAgents: async (req, res) => {
    try {
        const allAgents = await agentsController.getAllAgents();
        res.status(200).json(allAgents)
    } catch (error) {
        res.status(400).json({error: error.message});
    };
},

createAgent: async (req, res) => {
    const agentData = req.body.agentData;
    try {
        const newAgent = await agentsController.createAgent(agentData);
        res.status(200).json(newAgent)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
};