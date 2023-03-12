import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import About from './Component/About/App'
import Insight from './Component/Insights/App'
import reportWebVitals from './reportWebVitals'
import NewsPage from './Component/News/News'
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
import Publicationf from './Component/PublicationF/App'
import Publicationp from './Component/PublicationF/Publicationp'
import Report from './Component/Report/App'
import NewsMain from './Component/NewsMain/App'
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
      <Route path='/news-page' element={<NewsPage />} />
      <Route path='/news' element={<NewsMain />} />
      <Route path='/events' element={<Events />} />
      <Route path='/become-membership' element={<Members />} />
      <Route path='/membership-requirement' element={<MembRequire />} />
      <Route path='/existing-membership' element={<ExistingMembers />} />
      <Route path='/new-membership' element={<LatestMembers />} />
      <Route path='/insight-more' element={<InsightMore />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/reports' element={<Report />} />
      <Route path='/free-publication' element={<Publicationf />} />
      <Route path='/paid-publication' element={<Publicationp />} />
      <Route path='/sectoral' element={<Sectoral />} />
      <Route path='/operate' element={<Operate />} />
      <Route path='/mrc' element={<Mrc />} />
      <Route path='/mpdcl' element={<Mpdcl />} />
    </Routes>
  </BrowserRouter>
)
reportWebVitals()
