const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  const getEmployeeName = data.employees.find(
    (itemName) =>
      itemName.firstName === employeeName || itemName.lastName === employeeName,
  );
  return getEmployeeName;
};

module.exports = getEmployeeByName;
