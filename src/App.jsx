import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './navbar'
import Projects from './pages/projects'
import Home from "./pages/home"
import Honors from "./pages/honors"
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<div className="homePage"><Home /></div>} />
            <Route path="/Home" element={<div className="homePage"><Home /></div>} />
            <Route path="/Projects" element={<div className="projectsPage"><Projects /></div>} />
            <Route path="/Honors" element={<div className="honorsPage"><Honors /></div>} />

          </Routes>
          <footer>
            <p>© 2025 Katherine Brown - All Rights Reserved</p>
          </footer>
        </div>
      </HashRouter>
    </>
  )
}

export default App;

