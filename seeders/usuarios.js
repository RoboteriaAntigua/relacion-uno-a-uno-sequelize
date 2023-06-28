'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Usuarios', [{
       name:'tetete',
       email:'papanicolao@hotmail.com',
       pass:'4444',
       createdAt: new Date(),
       updatedAt: new Date()
    },
    {
      name:'aaaa',
      email:'terasd@hotmail.com',
      pass:'4356',
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    name:'pppppp',
    email:'aqqs@hotmail.com',
    pass:'4356',
    createdAt: new Date(),
    updatedAt: new Date()
 },
 {
  name:'jurtyy',
  email:'123@hotmail.com',
  pass:'4356',
  createdAt: new Date(),
  updatedAt: new Date()
}], {});
    
  },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Usuarios', null, {});
    
  }
};
