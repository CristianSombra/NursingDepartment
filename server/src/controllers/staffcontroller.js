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

const createAgent = async (id, image, name) => {
    try {
        const newAgent = await Agents.create({
            id,
            image,
            name,
            createdInDb,
        });
        return newAgent;
    } catch (error) {
        throw new Error('Error creating agent: ' + error.messsage);
    }
};

module.exports = {
    getAllAgents,
    createAgent
};