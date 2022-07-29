const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const childKey = entrants.filter((item) => item.age < 18);
  const adultKey = entrants.filter((item) => item.age >= 18 && item.age < 50);
  const seniorKey = entrants.filter((item) => item.age >= 50);
  const resultKey = {
    child: childKey.length,
    adult: adultKey.length,
    senior: seniorKey.length,
  };
  return resultKey;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const pricesChild = Object.values(data.prices)[2];
  const pricesAdult = Object.values(data.prices)[0];
  const pricesSenior = Object.values(data.prices)[1];
  const names = countEntrants(entrants);
  return (
    pricesChild * names.child + pricesAdult * names.adult + pricesSenior * names.senior
  );
};
// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
