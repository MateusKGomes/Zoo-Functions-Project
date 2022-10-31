const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ageMin) {
  return species.find((specie) => specie.name === animal)
    .residents.every(({ age }) => age >= ageMin);
}

module.exports = getAnimalsOlderThan;
