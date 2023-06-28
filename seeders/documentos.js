'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
/*
    await queryInterface.bulkInsert('Documentos', [{
      numero: 32577,
      direccion: "calle falsa 123",
      tipo: "dni",
      usuarioId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numero: 454545,
      direccion: "calle peron",
      tipo: "dni",
      usuarioId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numero: 4444444,
      direccion: "calle cucha",
      tipo: "dni",
      usuarioId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numero: 5766778,
      direccion: "calle la cucha",
      tipo: "dni",
      usuarioId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});*/

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Documentos', null, {});

  }
};
