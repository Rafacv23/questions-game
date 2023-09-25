import React from "react"
import "../styles/question.css"

const Enunciado = ({ round, preguntaActual }) => {
  return (
    <div className="question-container">
      <h4>Pregunta {round}</h4>
      {preguntaActual && <h2>{preguntaActual.pregunta.enunciado}</h2>}
    </div>
  )
}

export default Enunciado
