'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documento extends Model {
    static associate(models) {
      // define association here
      Documento.belongsTo(models.Usuario, {
        foreignKey:"usuarioId",
        targetKey:"id"
      },)
    }
  }
  Documento.init({
    numero: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    tipo: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Documento',
  });
  return Documento;
};