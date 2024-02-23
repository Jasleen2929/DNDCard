import logo from './logo.svg';
import './App.css';
import React from 'react';
import Draggable from 'react-draggable';
// import Data from './Data.js';
import { useState } from 'react';

import { Data } from './Data';
import DraggableInputs from './DraggableInputs';
import Droppable from './Droppable';
import SavedScreen from './SavedScreen';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
function App() {

  const [selectedDiv ,  setSelectedDiv] = useState();
  console.log("data given ",selectedDiv);
  

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Droppable />} />
        <Route path="/saved-screen" element={<SavedScreen />} />
      </Routes>
    </BrowserRouter>
  );
  
}


export default App;
