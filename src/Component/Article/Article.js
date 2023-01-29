import React from 'react'
import './Article.scss'
import Articleimage from '../../images/div8.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

function Article() {
  return (
    <div className='article'>
      <div className='news_main'>
        <div className='cover'>
          <div className='left'>
            <img src={Articleimage} alt='' />
          </div>
          <div className='right'>
            <div className='top'>
              <h2>News</h2>
            </div>
            <div className='wrap'>
              {[...Array(4)].map((item, i) => (
                <div className='card' key={1 + i}>
                  <button>Publication</button>
                  <div className='flex'>
                    <h3>Manufacturing Outlook Q4 2022</h3>
                    <OpenInNewIcon />
                  </div>
                  <p>January 03, 2023</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
