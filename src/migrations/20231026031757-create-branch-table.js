'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("user", {
    await queryInterface.createTable("tweet", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,  
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("user");
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      tweet: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      
      // date_tweet: {
      //   type: Sequelize.DATE,
      // }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("tweet")
  }
};
