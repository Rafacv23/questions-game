import React, { useState } from "react"
import "./styles/App.css"
import Start from "./pages/start"
import { Route, Routes } from "react-router-dom"
import NotFound from "./pages/not-found"
import Game from "./pages/game"
import Rules from "./pages/rules"

function App () {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    if (playing) {
      setPlaying(false)
    } else {
      setPlaying(true)
    }
  }

  return (
    <>
      <Routes>
        {playing ? (
          <Route path="/" element={<Game handlePlay={handlePlay} />} />
        ) : (
          <Route path="/" element={<Start handlePlay={handlePlay} />} />
        )}
        <Route path="/juego" element={<Game handlePlay={handlePlay} />} />
        <Route path="/reglas" element={<Rules />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
