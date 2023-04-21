import {useState} from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  const handleAddClick = () => {
    setCounter(counter+1)
  } 

  const handleSubClick = () => {
    setCounter(counter-1)
  }

  const handleResetClick = () => {
    setCounter(value)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button aria-label = 'add' onClick={handleAddClick}>+1</button>
      <button aria-label = 'sub' onClick={handleSubClick}>-1</button>
      <button aria-label = 'reset' onClick={handleResetClick}>Reset</button>
    </>
    
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
