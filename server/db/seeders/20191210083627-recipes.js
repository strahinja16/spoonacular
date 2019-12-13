const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface) => {
    const insertData = [];

    for (let i = 0; i < 10; i++) {
      insertData.push({
        id: uuid(),
        title: `recipe${i + 1}`,
        image: `image${i + 1}`,
        externalId: `${(i + 1) * 100}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert('recipes', insertData, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('recipes', null, {});
  },
};
