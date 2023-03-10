const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {});
it('Teste não passando argumentos. Deverá retornar o objeto', () => {
  expect(getOpeningHours()).toEqual({
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  });
});

it('Para os argumentos Monday e 09:00-AM deve retornar a string: The zoo is closed', () => {
  expect(getOpeningHours('Monday', '09:35-AM')).toBe('The zoo is closed');
});

it('Para os argumentos Tuesday e 09:00-AM deve retornar a string: The zoo is open', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});

it('Para os argumentos Wednesday e 09:00-PM deve retornar a string: The zoo is closed', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
});

it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com uma mensagem', () => {
  expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(
    'The day must be valid. Example: Monday',
  );
});

it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com uma mensagem', () => {
  expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow();
});

it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com uma mensagem', () => {
  expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow();
});

it('Para os argumentos Saturday e 09:c0-AM deve lançar uma exceção com uma mensagem', () => {
  expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow();
});

it('Para os argumentos Monday e 13:00-AM deve lançar uma exceção com uma mensagem', () => {
  expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow();
});

it('Para os argumentos Tuesday e 09:60-AM deve lançar uma exceção com uma mensagem', () => {
  expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow();
});
