import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import About from './Component/About/App'
import Insight from './Component/Insights/App'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>

  <Route path="/" element={<App />}/>
  <Route path="About" element={<About/>}/>
  <Route path="Insight" element={<Insight/>}/>
  
  </Routes>
  </BrowserRouter>
);
reportWebVitals();
