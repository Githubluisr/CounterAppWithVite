import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Tests on 07-deses-array', () => {

  //que seam string y numero 
  test('Tipos de datos son los correctos', () => {

    const [cadena, numero] = retornaArreglo();
    //console.log(typeof(cadena));

    //forma 1:
    //expect(typeof cadena).toBe('string');
    // expect(typeof numero).toBe('number');

    //forma 2
    // expect(cadena).toStrictEqual(expect.any(String));
    // expect(numero).toStrictEqual(expect.any(Number));

  })

  //que sea el string y numero exactos
  test('Datos son los correctos', () => {

    const [cadena, numero ] = retornaArreglo();
    
    expect(cadena).toBe('ABC');
    expect(numero).toBe(123);

    
  })




});