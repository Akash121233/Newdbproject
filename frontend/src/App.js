import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

 // Ensure the file path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </Router>
  );
}

export default App;
