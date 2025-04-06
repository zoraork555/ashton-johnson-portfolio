import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Projects from './pages/Projects'
import About from './pages/About.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <div className="nav">
          <Link to="/">Education</Link>|
          <Link to="/projects">Projects</Link>|
          <Link to="/about">About</Link>
        </div>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
