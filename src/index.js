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
import Gallery from './Component/Gallery/App'
import Events from './Component/Events/Events'
import History from './Component/History/History'
import ScrollToTop from './Scroll'
import MembRequire from './Component/Members/MembRequire'
import Sectoral from './Component/Sectoral/Sectoral'
import Operate from './Component/Sectoral/Operate'
import Mrc from './Component/Sectoral/Mrc'
import Mpdcl from './Component/Sectoral/Mpdcl'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='About' element={<About />} /> */}
      <Route path='/about' element={<History />} />
      <Route path='/insight' element={<Insight />} />
      <Route path='/services' element={<Services />} />
      <Route path='/news' element={<News />} />
      <Route path='/events' element={<Events />} />
      <Route path='/become-membership' element={<Members />} />
      <Route path='/membership-requirement' element={<MembRequire />} />
      <Route path='/existing-membership' element={<ExistingMembers />} />
      <Route path='/new-membership' element={<LatestMembers />} />
      <Route path='/insight-more' element={<InsightMore />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/sectoral' element={<Sectoral />} />
      <Route path='/operate' element={<Operate />} />
      <Route path='/mrc' element={<Mrc />} />
      <Route path='/mpdcl' element={<Mpdcl />} />
    </Routes>
  </BrowserRouter>
)
reportWebVitals()
