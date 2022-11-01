const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

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
  if (Object.keys(entrants).length === 0 || entrants === {}) {
    return 0;
  }
  const child = Object.entries(countEntrants(entrants))
    .reduce((acc, cur) => acc + prices[cur[0]] * cur[1], 0);
  return child;
}

module.exports = { calculateEntry, countEntrants };
