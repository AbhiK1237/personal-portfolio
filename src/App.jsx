import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './enhanced.css';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <Router>
      <div className="App">
        <LoadingSpinner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
