import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import About from './Component/About/App'
import Insight from './Component/Insights/App'
import reportWebVitals from './reportWebVitals'
import News from './Component/News/News'
import Members from './Component/Members/Members'
import ExistingMembers from './Component/Members/ExistingMembers'
import LatestMembers from './Component/Members/LatestMembers'
import Services from './Component/Services/Services'
import InsightMore from './Component/InsightMore/App'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='About' element={<About />} />
      <Route path='Insight' element={<Insight />} />
      <Route path='Services' element={<Services />} />
      <Route path='News' element={<News />} />
      <Route path='become-membership' element={<Members />} />
      <Route path='existing-membership' element={<ExistingMembers />} />
      <Route path='new-membership' element={<LatestMembers />} />
      <Route path='Insight-more' element={<InsightMore />} />
    </Routes>
  </BrowserRouter>
)
reportWebVitals()
