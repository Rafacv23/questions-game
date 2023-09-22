import React from "react"

const Start = ({ handlePlay }) => {
  return (
        <div>
            <h1>¿Quién quiere ser millonario?</h1>
            <button onClick={() => handlePlay()}>Jugar</button>
            <button>Reglas</button>
        </div>
  )
}

export default Start
