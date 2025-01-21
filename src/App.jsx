import './App.css';
import NavigationBar from './navbar';
import Experience from './pages/experience';
import Home from './pages/home';
import About from './pages/about';
import Achievements from './pages/achievements';
import Connect from './pages/connect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/portfolio-project">
      <div>
        {/* Navbar */}
        <NavigationBar />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>© 2025 Katherine Brown - All Rights Reserved</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
