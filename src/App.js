import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Advertising from './Components/Advertising';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Advertising />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
