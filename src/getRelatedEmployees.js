const data = require('../data/zoo_data');

// referencia
// https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/

const isManager = (id) =>
  data.employees.some((item) =>
    item.managers.find((managersName) => managersName === id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees
    .filter((item) => item.managers.includes(managerId))
    .map((result) => `${result.firstName} ${result.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
