import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './navbar'
import Projects from './pages/projects'
import Home from "./pages/Home"
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter>
      <div>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Home" element = {<Home />}/>
      <Route path="/Works" element = {<Projects />}/>
      </Routes>
      </div>
      </HashRouter>
    </>
  )
}

export default App
