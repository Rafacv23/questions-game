import React from "react"

const Win = ({ setRound }) => {
  return (
        <div>
            <h1>Ganaste, felicidades</h1>
            <button className="button" onClick={() => setRound(1)}>Volver a jugar</button>
        </div>
  )
}

export default Win
