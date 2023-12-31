const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Agents",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
              },
            image: {
                type: DataTypes.STRING,
                allowNull: false
              },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
              },
            dni: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
              }, 
            gender: {
                type: DataTypes.ENUM("F", "M", "X"),
                allowNull: false,
                defaultValue: 'X'
              },
            birthday: {
                type: DataTypes.DATE,
                allowNull: false
              },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                isEmail: true
              },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
              }, 
            address: {
                type: DataTypes.STRING,
                allowNull: false
              },
            dateAdmission: {
                type: DataTypes.DATE,
                allowNull: false
              },
            academicLevel: {
                type: DataTypes.ENUM('Auxiliar', 'Técnico Superior en Enfermería', 'Enfermero Profesional', 'Enfermero Universitario', 'Licenciado en Enfermería'), 
                allowNull: false,
              },
            state: {
                type: DataTypes.ENUM('Contratado', 'Planta'), 
                allowNull: false,
              },  
            position: {
                type: DataTypes.ENUM('Piso', 'Jefe de área', 'Supervisor de turno', 'Jefe de departamento', 'Director'), 
                allowNull: false,
            },
            time: {
              type: DataTypes.ENUM('00-06','06-12','12-18','18-00','00-08','08-16','16-00'), 
              allowNull: false,
              },      
            createdInDb: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
              }
            }
        );
    };