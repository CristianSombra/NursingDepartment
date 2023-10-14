const { Agents, Sector } = require ('../db');

const getAllAgents = async (req, res) => {
    try {
        const agents = await Agents.findAll({
            include: {
                model: Sector,
                through: { attributes: []}
            }
        });
        return agents;
    } catch (error) {
        throw new Error('Server error, could not get de agents')
    }
};

const createAgent = async (agentData) => {
    try {
        console.log(agentData);
        const newAgent = await Agents.create({
            ...agentData,
            createdInDb: true
        });
        return newAgent;
    } catch (error) {
        console.error(error);
        throw new Error('Error creating agent: ' + error.message);
    }
};

module.exports = {
    getAllAgents,
    createAgent
};