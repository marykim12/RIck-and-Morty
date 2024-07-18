import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import CharactersList from './components/Characterslist.jsx';
import Characters from './components/Character.jsx'
import SearchBar from './components/searchbar.jsx';

function App() {

  return (
    <div>
    
      <Navbar/>
      <div className="container mx-auto p-4">
        <Routes>

    <Route path="/"element={<CharactersList/>} />
    <Route path="/Characterslist" element={<CharactersList />} />
    <Route path="/Character" element={<Characters/>} />
    </Routes>

    </div>

    </div>
  );
 
}

export default App
