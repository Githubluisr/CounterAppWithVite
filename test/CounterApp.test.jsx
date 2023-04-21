import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en Counter App', () => { 

  const counter = 100;

  test('Match con snapshot ', () => {
    render(<CounterApp value={counter}/>);
    expect(screen).toMatchSnapshot;
  })

  test('Mostrar el valor inicial de 100', () => {
    render(<CounterApp value={counter}/>);
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe("100");
  }) 

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={counter}/>);
    fireEvent.click(screen.getByRole('button', {name: 'add' }))
    expect(screen.getByText(101)).toBeTruthy();

  })

  test('debe de decrementar con el boton -1', () => {
    render(<CounterApp value={counter}/>);
    fireEvent.click(screen.getByRole('button', {name: 'sub' }))
    expect(screen.getByText(99)).toBeTruthy();

  })

  test('debe de funcionar con el boton reset', () => {
    render(<CounterApp value={counter} />);
    fireEvent.click(screen.getByRole('button', {name: 'sub' }))
    fireEvent.click(screen.getByRole('button', {name: 'sub' }))
    fireEvent.click(screen.getByRole('button', {name: 'sub' }))
    fireEvent.click(screen.getByRole('button', {name: 'sub' }))
    fireEvent.click(screen.getByRole('button', {name: 'reset'}));

    expect(screen.getByText(counter)).toBeTruthy();

  })

 })
