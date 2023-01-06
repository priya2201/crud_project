'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cars',([{
      model:'new',
      engine:'engine1'
    },{
      model:'old',
      engine:'engine2'
    }

    ]))
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('cars',null,{});
  }
};
