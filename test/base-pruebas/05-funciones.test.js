import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Tests on 05-funciones', () => {
  
  test('getUseractive must be an object', () => {

    const name = 'Juan Luis';

    const initialObject = getUsuarioActivo(name);

    //Opcion 1:: decalrando un objeto y usandolo:
    // const expectedObject = {
    //   uid: 'ABC567',
    //   username: name
    // }

    // expect(initialObject).toStrictEqual(expectedObject);


    //Opcion 2: o haciendolo directamente:
    expect(initialObject).toStrictEqual(
      {
        uid: 'ABC567',
        username: name
      });
  });
});