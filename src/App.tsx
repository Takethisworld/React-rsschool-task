import './App.css';
import React from 'react';
import Header from './components/header';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SearchBar from './components/searchBar';
import CardsPage from './components/cardsPage';
import AboutPage from './components/abutPage';
import ErrorPage from './components/404';

function App() {
  return (
    <>
    <div className="header">
       <Header currentPage={useLocation().pathname}/>
       <div className='header_links'>
          <Link to='/main'>Main </Link>
          <Link to='/cards'> Cards</Link>
          <Link to='/about_us'> About Us</Link>
       </div>
       <SearchBar/>
    </div>
    <Routes>
      <Route path='/cards' element={<CardsPage/>}/>
      <Route path='/about_us' element={<AboutPage/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </>

    
  );
}

export default App;
