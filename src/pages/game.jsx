import React, { useState, useEffect } from "react"
import Enunciado from "../containers/enunciado"
import Choices from "../containers/choices"
import Preguntas from "../data/questions.js"

const Game = ({ handlePlay }) => {
  const [questions, setQuestions] = useState([])
  const [round, setRound] = useState(1)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    setQuestions(Preguntas)
  }, [questions])
  const preguntaActual = questions.find((pregunta) => pregunta.pregunta.id === round)

  const nextRound = (selectedAnswer) => {
    const preguntaActual = questions.find((pregunta) => pregunta.pregunta.id === round)
    const respuestaSeleccionada = preguntaActual.respuestas.find((respuesta) => respuesta.id === selectedAnswer)
    if (respuestaSeleccionada.correcta) {
      setIsCorrect(true)
      setRound(round + 1)
      console.log("Correct")
    } else {
      setIsCorrect(false)
      handlePlay()
      console.log("Error")
    }
  }

  return (
        <div>
            <Enunciado round={round} preguntaActual={preguntaActual}></Enunciado>
            <Choices nextRound={nextRound} round={round} preguntaActual={preguntaActual} questions={questions} isCorrect={isCorrect}></Choices>
        </div>
  )
}

export default Game
