import React from "react"
import "../styles/App.css"
import { Link } from "react-router-dom"

const Start = ({ handlePlay }) => {
  return (
        <div>
            <h1>¿Quién quiere ser millonario?</h1>
            <div className="start-btns">
              <button className="button" onClick={() => handlePlay()}>Jugar</button>
              <Link to={"/reglas"} className="button">Reglas</Link>
            </div>
        </div>
  )
}

export default Start
