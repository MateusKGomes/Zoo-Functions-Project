const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getDaysWeek = (param) => species.find((specie) => specie.name === param).availability;

console.log(getDaysWeek('lions'));

function getSchedule(scheduleTarget) {

}
console.log(getSchedule());

module.exports = getSchedule;
