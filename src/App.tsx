import './App.css';
import React from 'react';
import Header from './components/header';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="header">
       <Header currentPage={useLocation().pathname}/>
    </div>
    </>
  );
}

export default App;
