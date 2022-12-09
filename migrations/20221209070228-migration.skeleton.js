'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction=await queryInterface.sequelize.transaction();
    try{
     await queryInterface.addColumn(
       'newusers',
       'foo.baz.bar',{
         type:Sequelize.STRING,
       },{
         transaction
       }
     );
     await transaction.commit();
    }catch(err){
     await transaction.rollback();
     throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction=await queryInterface.sequelize.transaction();
    try{
     await queryInterface.removeColumn('newusers',
     'foo.baz.bar',{
       transcation
     });
     await transaction.commit();
    }
    catch(err){
     await transaction.rollback();
     throw err;
    }
     
  }
};
