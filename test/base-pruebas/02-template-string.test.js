import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe ( 'Test on 02-template-string', () => {

  test('get Saludo', () => {
    const name = 'Juan Luis';
    
    const greetings1 = getSaludo(name);
    
    const expectedGreetings = `Hola ${name}`;

    expect(greetings1).toBe(expectedGreetings);

  })
  

})