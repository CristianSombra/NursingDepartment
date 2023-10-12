const { Agents, Sector } = require ('../db');

const getAllSector = async (req, res) => {
    try {
        const agents = await Agents.findAll()
        return agents;
    } catch (error) {
        throw new Error('Server error, could not get de agents')
    }
};

const createSector = async (name) => {
    try {
        const newAgent = await Sector.create({
            name,
            createdInDb,
        });
        return newAgent;
    } catch (error) {
        throw new Error('Error creating agent: ' + error.messsage);
    }
};

module.exports = {
    getAllSector,
    createSector
};