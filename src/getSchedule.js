const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalDay(animal) {
  return species.find((specie) => specie.name === animal).availability;
}

const animalDay = (weekDay) => species
  .filter((specie) => specie.availability.includes(weekDay))
  .map((getName) => getName.name);

const objDays = () =>
  Object.assign({},
    ...Object.keys(hours).map((weekDays) => {
      const { open, close } = hours[weekDays];
      return {
        [weekDays]: {
          officeHour: weekDays !== 'Monday' ? `Open from ${open}am until ${close}pm` : 'CLOSED',
          exhibition: weekDays !== 'Monday' ? animalDay(weekDays) : 'The zoo will be closed!',
        },
      };
    }));

const dayWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

function getSchedule(param) {
  const verificaDia = dayWeek.includes(param);
  const verificaAnimal = species.some((specie) => Object.values(specie).includes(param));
  if (!param || (!verificaDia && !verificaAnimal)) return objDays();
  if (verificaDia) return { [param]: objDays()[param] };
  return getAnimalDay(param);
}

module.exports = getSchedule;
