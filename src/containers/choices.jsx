import React from "react"
import "../styles/choices.css"

const Choices = ({ preguntaActual, nextRound }) => {
  return (
    <div className="choices-container">
      <ul>
        {preguntaActual && preguntaActual.respuestas.map((res) => (
          <button className="button-choice" onClick={() => nextRound(res.id)} key={res.id}>{res.texto}</button>
        ))}
      </ul>
    </div>
  )
}

export default Choices
