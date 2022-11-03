const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('teste 1 - verifica se o zoo está aberto monday, 09:00-AM', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('teste 2 - verifica se o zoo está aberto Tuesday, 09:00-AM', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });
  it('teste 3 - verifica se o zoo está aberto Wednesday, 09:00-PM', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });
  it('teste 4 - verifica mensagem de erro Thu, 09:00-AM', () => {
    const actual = ('Thu', '09:00-AM');
    expect(() => getOpeningHours(actual)).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('teste 5 - verifica mensagem de erro Friday, 09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('teste 6 - verifica mensagem de erro Saturday, C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(new Error('The hour should represent a number'));
  });
  it('teste 7 - verifica mensagem de erro Sunday, 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(new Error('The minutes should represent a number'));
  });
  it('teste 8 - verifica mensagem de erro Monday, 13:00-AM', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('teste 9 - verifica mensagem de erro Tuesday, 09:60-AM', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('teste 10 - se a função não recebe parâmetros retorna os dias da semana e os horários de funcionamento', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
});
