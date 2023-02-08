'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('meet_greet', [{
      meet_greet_id: 1,
      event_id: 1,
      band_id: 6,
      meet_start_time: '2023-06-21 19:00:00',
      meet_end_time: '2023-06-21 23:00:00'
    },
    {
      meet_greet_id: 2,
      event_id: 2,
      band_id: 6,
      meet_start_time: '2023-06-22 19:00:00',
      meet_end_time: '2023-06-22 23:00:00'
    }
  ])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('meet_greet', null, {});
  }
};
