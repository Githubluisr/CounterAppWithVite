import { getByText, render } from '@testing-library/react'
import { FirstApp } from '../src/FisrtApp'


describe('Pruebas en <FistApp>', () => {
  
  // test('Hacer match con snapshot', () => {

  //   const title = 'Hola'
  //   const {container} =  render(<FirstApp title={title}/>)
  //   expect(container).toMatchSnapshot();  //Esto solo compara con el snapshot grabado
  // });

  test('debe mostrar el titulo en un <h1>', () => {

    const title = "Hola";
    const { container, getByText, getByTestId}  = render(<FirstApp title={title}/>);

    //Solo confirma que el title exista en el container:
    expect(getByText(title)).toBeTruthy(); // con getByText se busca el title en el container. luego con truty se pregunta si existe

    //esta es una forma para buscar que el title realmente este en un h1
    // const header = container.querySelector('h1'); // buscar en el container el h1 que haya
    // expect(header.innerHTML).toBe("Hola");
    expect(getByTestId('test-title').innerHTML).toBe(title);
    //expect(getByTestId('test-title').innerHTML).toContain(title); //La diferencia con contain es que esta no le importa los espacios
 
  })


  test('debe mostrar el SUB-titulo en un <h2>', () => {

    const title = "Hola";
    const subtitle = 'Aprendiendo React';
    const { getAllByText }  = render(<FirstApp title={title} subTitle='Aprendiendo React'/>);
    //console.log(getAllByText(subtitle).length);
    //expect(getByText(subtitle).innerHTML).toBe(subtitle);
    expect(getAllByText(subtitle).length).toEqual(2); //muy similar al anterior, solo que asi se evaluan si hubiera mas de dos
    


  })


});