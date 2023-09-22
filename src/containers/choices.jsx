import React from "react"

const Choices = ({ preguntaActual, nextRound }) => {
  return (
    <div>
      <ul>
        {preguntaActual && preguntaActual.respuestas.map((res) => (
          <button onClick={() => nextRound(res.id)} key={res.id}>{res.texto}</button>
        ))}
      </ul>
    </div>
  )
}

export default Choices
