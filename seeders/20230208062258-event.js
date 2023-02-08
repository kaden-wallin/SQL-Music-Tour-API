'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('event', [{
      name: 'Cool Festival',
      date: '2023-06-22 19:00:00',
      meet_start_time: '2023-06-22 19:00:00',
      meet_end_time: '2023-06-22 23:00:00'
    },
    {
      name: 'Amazing Festival',
      date: '2023-06-24 19:00:00',
      meet_start_time: '2023-06-24 19:00:00',
      meet_end_time: '2023-06-24 23:00:00'
    }
  ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('event', null, {});
  }
};
