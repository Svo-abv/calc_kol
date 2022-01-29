import React from 'react';
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import FoodConsumption from './pages/FoodConsumption';
import ProductDictionary from './pages/ProductDictionary';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/FoodConsumption" element={<FoodConsumption />} />
          <Route path="/ProductDictionary" element={<ProductDictionary />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
