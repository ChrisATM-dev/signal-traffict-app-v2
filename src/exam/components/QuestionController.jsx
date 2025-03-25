import React from 'react'

export const QuestionController = ({counter, increment, decrement, setSpecificValue, cantidadSenales}) => {
  
  const handleSelectChange = (e) => {
    const selectedNumber = parseInt(e.target.value);
    setSpecificValue(selectedNumber);
  };

  return (
    <div className='question-bar'>
      <button className='buttom-controller' onClick={decrement}>Anterior</button>
      <div className='question-selector'>
        <select 
          value={counter} 
          onChange={handleSelectChange}
          className='question-select'
        >
          {Array.from({length: cantidadSenales}, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span>/{cantidadSenales}</span>
      </div>
      <button className='buttom-controller' onClick={increment}>Siguiente</button>
    </div>
  )
}
