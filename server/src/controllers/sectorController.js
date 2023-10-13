const { Agents, Sector } = require ('../db');

const getAllSectors = async (req, res) => {
    try {
        const agents = await Agents.findAll({
            include: {
                model: Agents,
                through: { attributes: []}
            }
        });
        return agents;
    } catch (error) {
        throw new Error('Server error, could not get de agents')
    }
};

const createSector = async (name) => {
    try {
        const newSector = await Sector.create({
            name,
            createdInDb,
        });
        return newSector;
    } catch (error) {
        throw new Error('Error creating Sector');
    }
};

module.exports = {
    getAllSectors,
    createSector
};