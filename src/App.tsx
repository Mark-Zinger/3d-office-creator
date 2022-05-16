import React, {useRef, useState} from 'react';
import './App.css';
import Canvas from "./components/Canvas";

import {
    BrowserRouter as Router,
    Navigate,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Game from "./components/Game";
import PrefabEditor from "./components/PrefabEditor";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Game/>} />
              <Route path="/prefabs/:id" element={<PrefabEditor/>} />
              <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
