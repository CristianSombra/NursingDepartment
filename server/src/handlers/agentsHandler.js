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

getAgentById: async (req, res) => {
    const { id } = req.params;
    try {
        const agent = await agentsController.getAgentID(id);
        if(!agent){
            return res.status(404).json({error:"Agent not found"})
        }
        return res.status(200).json(agent);
    } catch (error) {
        res.status(500).json({error:"Error finding agent in DB"});
    }
},

getAgentByName: async (req, res) => {
    const { name } = req.query;
    try {
        const agent = await agentsController.getAgentByName(name);
        if (agent.length === 0){
            return res.status(404).json({error:"Agent not found"});
        }
        return res.status(200).json(agent)
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"Error finding agent in DB"})
    }
},

createAgent: async (req, res) => {
    const agentData = req.body.agentData;
    try {
        const newAgent = await agentsController.createAgent(agentData);
        res.status(200).json(newAgent);
    } catch (error) {
        res.status(400).json({ error: `Error creating agent: ${error.message}` });
    }
}
};