const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids.length) return [];
  return data.species.filter((item) => ids.includes(item.id));
};

module.exports = getSpeciesByIds;
