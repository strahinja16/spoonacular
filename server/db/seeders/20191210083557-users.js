const faker = require('faker');
const uuid = require('uuid/v4');
const bcrypt = require('bcryptjs');

const passwordHashSaltRounds = 10;

module.exports = {
  up: (queryInterface) => {
    const insertData = [];

    for (let i = 0; i < 10; i++) {
      insertData.push({
        id: uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: `dev-user${i}@test.com`,
        password: bcrypt.hashSync('test', passwordHashSaltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert('users', insertData, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
