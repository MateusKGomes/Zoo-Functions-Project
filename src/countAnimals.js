const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const getSpecie = species.find((specie) => specie.name === animal.specie).residents;
  if (!animal.sex) {
    return getSpecie.length;
  }
  return getSpecie.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
