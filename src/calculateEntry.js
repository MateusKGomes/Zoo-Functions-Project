const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entradas = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } if (entrant.age >= 18 && entrant.age < 50) {
      adult += 1;
    } if (entrant.age >= 50) {
      senior += 1;
    }
  });
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants = 0) {
  if (calculateEntry === {}) {
    return 0;
  }
  const child = Object.entries(countEntrants(entrants))
    .reduce((acc, cur) => acc + prices[cur[0]] * cur[1], 0);
  return child;
}
console.log(calculateEntry(entradas));

module.exports = { calculateEntry, countEntrants };
