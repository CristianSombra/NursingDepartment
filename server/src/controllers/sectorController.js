const { Agents, Sector } = require ('../db');

const getAllSectors = async () => {
    try {
        const sectors = await Sector.findAll();
        return sectors;
    } catch (error) {
        throw new Error('Server error, could not get the sectors');
    }
};

const createSector = async (id_sector, image, name, state) => {
    try {
        const newSector = await Sector.create({
            id_sector,
            image, 
            name,
            state,
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