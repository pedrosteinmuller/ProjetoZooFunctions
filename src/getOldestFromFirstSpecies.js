const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getEmployee = employees.find((item) => item.id === id)
    .responsibleFor[0];
  const animal = species.find((element) => element.id === getEmployee);
  const animalSorted = animal.residents
    .sort((a, b) => b.age - a.age)
    .map((param) => [param.name, param.sex, param.age])[0];
  return animalSorted;
};

module.exports = getOldestFromFirstSpecies;
