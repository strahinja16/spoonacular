const faker = require('faker');
const uuid = require('uuid/v4');
const passwordHash = require('password-hash');

module.exports = {
  up: (queryInterface) => {
    const insertData = [];

    for (let i = 0; i < 10; i++) {
      insertData.push({
        id: uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: `user${i}@test.com`,
        password: passwordHash.generate('test'),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert('Users', insertData, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
