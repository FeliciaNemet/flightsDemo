
import './App.css';
import React from 'react';
import Header from "./components/Header/Header.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import HomePage from './Pages/HomePage/HomePage.js';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
