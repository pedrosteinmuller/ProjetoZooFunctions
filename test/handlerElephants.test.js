const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {});
  it('Realizando os testes de retorno para a função HandlerElephants', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Para o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  //referencia para o requisito com parâmetro 'popularity':
    //https://stackoverflow.com/questions/24090270/how-can-i-test-that-a-value-is-greater-than-or-equal-to-in-jasmine
    // https://jestjs.io/pt-BR/docs/expect#tobegreaterthanorequalnumber--bigint
  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toEqual(['Monday']);
    });
    //referencia para o requisito com parâmetro 'availability'
    //https://jestjs.io/pt-BR/docs/expect#not
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
    });
    it('Passando por argumento um objeto vazio ({}) deve retornar a string Parâmetro inválido, é necessário uma string', () => {
      expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
    });
    it('Passada uma string que não contempla uma funcionalidade deve retornar null.', () => {
      expect(handlerElephants('123456789')).toBeNull();
    });

    //referencia para o requisito com parâmetro '123456789'
    //https://jestjs.io/pt-BR/docs/expect#tobenull
 
