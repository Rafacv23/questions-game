import React from "react"

const Enunciado = ({ round, preguntaActual }) => {
  return (
    <div>
      <h4>Pregunta {round}</h4>
      {preguntaActual && <h2>{preguntaActual.pregunta.enunciado}</h2>}
      <h4>Pregunta</h4>
    </div>
  )
}

export default Enunciado
