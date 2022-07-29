const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const { residents } = species.find((item) => item.name === animal.specie);
  return !animal.sex
    ? residents.length
    : residents.filter((element) => element.sex === animal.sex).length;
};

module.exports = countAnimals;
