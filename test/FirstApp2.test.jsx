import { getByText, render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FisrtApp'


describe('Pruebas en <FistApp>', () => {
  
  const title = 'Hola';
  const subtitle = 'Aprendiendo React'

  test('Hacer match con snapshot', () => {

    render(<FirstApp title={title}/>)
    expect(screen).toMatchSnapshot(); 
  });

  test('Debe mostrar el mensaje con el titulo Juan Luis', () => {

    render(<FirstApp title={title}/>)
    expect(screen.getByText(title)).toBeTruthy();

  })

  test('Debe mostrar el mensaje en un <h1>', () => {

    render(<FirstApp title={title}/>)
    expect(screen.getByRole('heading', {level: 1 }).innerHTML).toContain(title);

  })

  test('Debe de mostrat el subtitulo enviado por props', () => {

    render(<FirstApp title={title} subTitle={subtitle}/>)
    expect(screen.getAllByText(subtitle).length).toEqual(2)

  })



});