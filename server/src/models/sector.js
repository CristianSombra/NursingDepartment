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