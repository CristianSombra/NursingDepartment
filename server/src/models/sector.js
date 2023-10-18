const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Sector', {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
          id_sector: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            },
          state: {
            type: DataTypes.ENUM('Area cerrada', 'Area abierta'), 
            allowNull: false,
            }            
            },
      )
  };