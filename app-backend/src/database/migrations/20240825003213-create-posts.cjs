'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID:{
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
              model: 'Users',
              key: 'id',
              as: 'userID',
          },
          allowNull: false
      },
      title:{
          type: Sequelize.STRING,
          allowNull: false
      },
      description:{
          type: Sequelize.STRING,
          allowNull: false
      },
      content:{
          type: Sequelize.STRING,
          allowNull: false
      },
      emphasis:{
          type:Sequelize.STRING,
          allowNull:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};