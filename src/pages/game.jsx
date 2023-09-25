import React, { useState, useEffect } from "react"
import Enunciado from "../containers/enunciado"
import Choices from "../containers/choices"
import Preguntas from "../data/questions.js"
import Notification from "../components/notification"
import Win from "./win"

const Game = ({ handlePlay }) => {
  const [questions, setQuestions] = useState([])
  const [easy, setEasy] = useState([])
  const [medium, setMedium] = useState([])
  const [hard, setHard] = useState([])
  const [preguntaActual, setPreguntaActual] = useState(null)
  const [round, setRound] = useState(1)
  const [isCorrect, setIsCorrect] = useState(false)
  const [notification, setNotification] = useState(false)

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

    const hardQuestions = questions.filter((question) => question.pregunta.dificultad === 3)
    setHard(hardQuestions)
  }

  const getQuestion = () => {
    if (round <= 5 && round > 0) {
      const randomIndex = Math.floor(Math.random() * easy.length)
      const preguntaActual = easy[randomIndex]
      return preguntaActual
    } else if (round >= 6 && round < 15) {
      const randomIndex = Math.floor(Math.random() * medium.length)
      const preguntaActual = medium[randomIndex]
      return preguntaActual
    } else if (round >= 15 && round <= 20) {
      const randomIndex = Math.floor(Math.random() * hard.length)
      const preguntaActual = hard[randomIndex]
      return preguntaActual
    } else {
      return null
    }
  }

  const nextRound = (selectedAnswer) => {
    const respuestaSeleccionada = preguntaActual.respuestas.find(
      (respuesta) => respuesta.id === selectedAnswer
    )

    if (respuestaSeleccionada.correcta) {
      setIsCorrect(true)
      setRound(round + 1)
      console.log("Correcto")
      setNotification(true)
      setTimeout(() => {
        setNotification(false)
      }, 5000)
    } else {
      setIsCorrect(false)
      handlePlay()
      console.log("Error")
      setNotification(true)
      setTimeout(() => {
        setNotification(false)
      }, 1000)
    }
  }

  return (
    <div>
      {round > 20 ? (
        <Win setRound={setRound} />
      ) : (
        <>
          <Enunciado round={round} preguntaActual={preguntaActual}></Enunciado>
          <Choices
            nextRound={nextRound}
            round={round}
            preguntaActual={preguntaActual}
            questions={questions}
            isCorrect={isCorrect}
          ></Choices>
          {notification ? (
            <Notification
              className={isCorrect ? "notification" : "notification-error"}
              text={isCorrect ? "Acertaste" : "Fallaste"}
            />
          ) : null}
        </>
      )}
    </div>
  )
}

export default Game
