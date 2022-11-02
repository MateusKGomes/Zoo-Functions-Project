const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(idEmplo) {
  const getFirstEmployee = employees.find((employee) => idEmplo === employee.id).responsibleFor[0];
  const oldAimal = data.species.find(({ id }) => id === getFirstEmployee).residents
    .reduce((acc, cur) => ((acc.age > cur.age) ? acc : cur));
  return Object.values(oldAimal);
}

module.exports = getOldestFromFirstSpecies;
