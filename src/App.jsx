import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavigationBar from './navbar';
import Experience from './pages/experience';
import Home from "./pages/home";
import About from "./pages/about";
import Achievements from "./pages/achievements";
import Connect from './pages/connect';
import {  BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path="/" element={<div className="homePage"><Home /></div>} />
            <Route path="/Home" element={<div className="homePage"><Home /></div>} />
            <Route path="/About" element={<div className="aboutPage"><About /></div>} />
            <Route path="/Experience" element={<div className="expPage"><Experience /></div>} />
            <Route path="/Achievements" element={<div className="achPage"><Achievements /></div>} />
            <Route path="/Connect" element={<div className="connectPage"><Connect /></div>} />
          </Routes>
          <footer>
            <p>© 2025 Katherine Brown - All Rights Reserved</p>
          </footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;

