const { Agents, Sector } = require ('../db');
const { Op } = require("sequelize");

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

const getAgentID = async (id) => {
    const agent = await Agents.findByPk(id, {
        include: [{
            model: Sector,
            as: 'Sectors',
        }],
    });
    
    if(!agent) {
        throw new Error("Agent not found")
    }
    return agent;
};

const getAgentByName = async (name) => {
    const agents = await Agents.findAll({
        where:{
            name:{
                [Op.iLike]: `%${name}%`
            },
        },
    });
    if(agents.length === 0) {
        throw new Error("Agent not found")
    }
    return agents;
}

const createAgent = async (agentData) => {
    try {
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
    getAgentID,
    getAgentByName,
    createAgent
};