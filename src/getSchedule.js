const data = require('../data/zoo_data');

// feito com ajuda do Rafael Sampaio da turma 24 tribo A

const daysWeek = [
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'Monday',
];
const listAn = data.species.map((element) => element.name);

const hour1 = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
};

const exh = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }
  return data.species.reduce((acc, currValue) => {
    if (currValue.availability.includes(day)) {
      acc.push(currValue.name);
    }
    return acc;
  }, []);
};

const getSchedule = (scheduleTarget) => {
  if (daysWeek.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: {
        officeHour: hour1(scheduleTarget),
        exhibition: exh(scheduleTarget),
      },
    };
  }
  if (!scheduleTarget || (!daysWeek.includes(scheduleTarget) && !listAn.includes(scheduleTarget))) {
    return daysWeek.reduce(
      (acc, currValue) => ({
        ...acc,
        [currValue]: { officeHour: hour1(currValue), exhibition: exh(currValue),
        },
      }), {},
    );
  }
  return data.species.find((item) => item.name === scheduleTarget).availability;
};
module.exports = getSchedule;
