import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en async await', () => { 
  
  test('se obtiene una url', async () => {

    const url = await getImagen();
    //console.log(url);

    expect(typeof(url)).toBe('string');  

  }) 


})