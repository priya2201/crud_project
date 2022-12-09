'use strict';

const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('newusers',[{
      name:'siya',
      email:'siya@gmail.com',
"foo.baz.bar":1,
createdAt:new Date(),
updatedAt:new Date()
      
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('newusers',nulll,{});
  }
};
