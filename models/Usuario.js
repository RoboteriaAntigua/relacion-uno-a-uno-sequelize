'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // define association here
      Usuario.hasOne(models.Documento, {
        foreignKey:"usuarioId"
      })
    }
  }
  Usuario.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};