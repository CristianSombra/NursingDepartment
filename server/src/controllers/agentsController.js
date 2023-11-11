const { Agents, Sector } = require ('../db');

const getAllAgents = async () => {
    try {
        const agents = await Agents.findAll({
            include: Sector,
            through: { attributes: []}
        });
        return agents;
    } catch (error) {
        throw new Error('Server error, could not get the agents')
    }
};

const createAgent = async (agentData) => {
    try {
        console.log(agentData);
        const newAgent = await Agents.create({
            ...agentData,
            createdInDb: true
        });

         // Encuentra el sector correspondiente por su id_sector
        const sector = await Sector.findOne({
        where: {
            id_sector: agentData.id_sector
            }
        });
        
         // Asocia el agente con el sector
    if (sector) {
    await newAgent.setSector(sector);
    }
    
    return newAgent;
    
} catch (error) {
        throw new Error('Error creating agent: ' + error.message);
    }
};

module.exports = {
    getAllAgents,
    createAgent
};