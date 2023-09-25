import React from "react"
import { Link } from "react-router-dom"
import "../styles/rules.css"

const Rules = () => {
  return (
        <div className="rules-container">
            <h2>Reglas</h2>
            <p>Bienvenido al Juego de Preguntas. Aquí están las reglas para jugar:</p>
            <ol>
                <li>El juego consiste en responder un total de 20 preguntas.</li>
                <li>Cada pregunta tiene 4 posibles respuestas, de las cuales solo una es correcta.</li>
                <li>Para responder, haz clic en la opción que consideras correcta.</li>
                <li>Si respondes correctamente, avanzarás a la siguiente pregunta.</li>
                <li>Si respondes incorrectamente en cualquier momento, el juego se dará por terminado.</li>
            </ol>
            <p>¡Diviértete y demuestra tus conocimientos!</p>
            <Link className="button" to={"/"}>Volver</Link>
        </div>
  )
}

export default Rules
