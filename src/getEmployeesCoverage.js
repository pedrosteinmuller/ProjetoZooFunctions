const data = require('../data/zoo_data');

// feito o requisito com o auxílio/ajuda/cooperação/paciência do estudante João Matheus turma 24 tribo B.
// passei 3 dias tentando fazer pedindo ajuda na mentoria e pesquisando, precisei de ajuda para consegui entender e finalizar

// posssuo o empregado, e os id's dos animais que o mesmo é responsável que estão dentro de um array
// acessar o id do animal dentro do species e pegar o seu nome

const employeeInfo = (empName) =>
  data.employees.find((item) => {
    const getEmployee = item.firstName === empName.name
      || item.lastName === empName.name
      || item.id === empName.id;
    return getEmployee;
  });

// console.log(employeeInfo({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }))

const getSpecies = (array) => {
  const listSpecies = [];
  data.species.forEach((element) => {
    if (array.includes(element.id)) {
      listSpecies.push(element.name);
    }
  });
  return listSpecies;
};

const specificLocation = (array1) => {
  const listLocations = [];
  data.species.forEach((element1) => {
    if (array1.includes(element1.id)) {
      listLocations.push(element1.location);
    }
  });
  return listLocations;
};

// console.log(specificLocation(['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46']));
// console.log(getSpecies(['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46']))

// Caso a função não receba parâmetros, retorne um array com a informação de todas as pessoas colaboradoras

const getAllEmployees = () => data.employees.map((item) => ({
  id: item.id,
  fullName: `${item.firstName} ${item.lastName}`,
  species: getSpecies(item.responsibleFor),
  locations: specificLocation(item.responsibleFor),
}));

const getOneEmployee = (parametro) => {
  const getInfos = employeeInfo(parametro);
  return {
    id: getInfos.id,
    fullName: `${getInfos.firstName} ${getInfos.lastName}`,
    species: getSpecies(getInfos.responsibleFor),
    locations: specificLocation(getInfos.responsibleFor),
  };
};

const verifyId = data.employees.map((onlyId) => onlyId.id);
const verifyFirstName = data.employees.map((onlyId) => onlyId.firstName);
const verifyLastName = data.employees.map((onlyId) => onlyId.lastName);

const getEmployeesCoverage = (empName) => {
  if (!empName) {
    return getAllEmployees();
  }
  if (verifyFirstName.includes(empName.name)
   || verifyLastName.includes(empName.name)
   || verifyId.includes(empName.id)) {
    return getOneEmployee(empName);
  }
  throw new Error('Informações inválidas');
};

// console.log(getEmployeesCoverage({ name: 'Sharonda'}));

module.exports = getEmployeesCoverage;
