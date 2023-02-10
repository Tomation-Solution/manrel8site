import React from 'react'
import Image from '../../images/div-sub.png'
import { useUIContext } from '../../Ui'
import './Subscribe.scss'

function Subscribe() {
  const { subscribe, setSubscribe } = useUIContext()
  return (
    subscribe && (
      <div className='Subscribe'>
        <div className='cover'>
          <div className='left'>
            <img src={Image} alt='' />
          </div>
          <div className='right'>
            <div className='huo'>
              <h1>Subscribe to our Newsletter</h1>
              <div>
                <input type='email' placeholder='Email Address' />
              </div>
              <button onClick={() => setSubscribe(false)}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Subscribe
