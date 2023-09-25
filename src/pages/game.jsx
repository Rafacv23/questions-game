import React, { useState, useEffect } from "react"
import Enunciado from "../containers/enunciado"
import Choices from "../containers/choices"
import Preguntas from "../data/questions.js"

const Game = ({ handlePlay }) => {
  const [questions, setQuestions] = useState([])
  const [easy, setEasy] = useState([])
  const [medium, setMedium] = useState([])
  const [hard, setHard] = useState([])
  const [preguntaActual, setPreguntaActual] = useState(null)
  const [round, setRound] = useState(1)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {
    setQuestions(Preguntas)
  }, [])

  useEffect(() => {
    setDifficulty()
  }, [questions])

  useEffect(() => {
    setPreguntaActual(getQuestion())
  }, [round, easy, medium, hard])

  const setDifficulty = () => {
    const easyQuestions = questions.filter((question) => question.pregunta.dificultad === 1)
    setEasy(easyQuestions)

    const mediumQuestions = questions.filter((question) => question.pregunta.dificultad === 2)
    setMedium(mediumQuestions)
    console.log(mediumQuestions)

    const hardQuestions = questions.filter((question) => question.pregunta.dificultad === 3)
    setHard(hardQuestions)
    console.log(hardQuestions)
  }

  const getQuestion = () => {
    if (round < 6 && round > 0) {
      const randomIndex = Math.floor(Math.random() * easy.length)
      const preguntaActual = easy[randomIndex]
      return preguntaActual
    } else if (round >= 6 && round < 15) {
      const randomIndex = Math.floor(Math.random() * medium.length)
      const preguntaActual = medium[randomIndex]
      return preguntaActual
    } else if (round <= 20 && round >= 15) {
      const randomIndex = Math.floor(Math.random() * hard.length)
      const preguntaActual = hard[randomIndex]
      return preguntaActual
    }
  }

  const nextRound = (selectedAnswer) => {
    const respuestaSeleccionada = preguntaActual.respuestas.find(
      (respuesta) => respuesta.id === selectedAnswer
    )
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
      <Choices
        nextRound={nextRound}
        round={round}
        preguntaActual={preguntaActual}
        questions={questions}
        isCorrect={isCorrect}
      ></Choices>
    </div>
  )
}

export default Game
