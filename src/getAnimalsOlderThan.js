const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalName = data.species.find(
    (specieName) => specieName.name === animal,
  );
  return animalName.residents.every((item) => item.age > age);
};

module.exports = getAnimalsOlderThan;
