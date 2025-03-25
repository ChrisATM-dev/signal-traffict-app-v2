import React from 'react'

export const SignalQuestion = ({counter, signal, handleSelectRespuesta}) => {
  return (
    <div className='container-question'>
      <img src={signal.image} alt={counter} />
      <div className='container-question-answers'>
        <p 
          className={`container-question-answers-p ${signal.respuestas[0].isSelected ? 'selected' : ''}`} 
          onClick={() => handleSelectRespuesta(signal.id, 1)}
        >
          {signal.respuestas[0].res}
        </p>
        <p 
          className={`container-question-answers-p ${signal.respuestas[1].isSelected ? 'selected' : ''}`} 
          onClick={() => handleSelectRespuesta(signal.id, 2)}
        >
          {signal.respuestas[1].res}
        </p>
        <p 
          className={`container-question-answers-p ${signal.respuestas[2].isSelected ? 'selected' : ''}`} 
          onClick={() => handleSelectRespuesta(signal.id, 3)}
        >
          {signal.respuestas[2].res}
        </p>
      </div>
    </div>
  )
}
