import React from 'react'
import Image from '../../images/pos.png'
import './Subscribe.scss'

function Premium({ setPremium }) {
  return (
    <div className='Subscribe'>
      <div className='cover'>
        <div className='left'>
          <img src={Image} alt='' />
        </div>
        <div className='right'>
          <div className='huo'>
            <h1>This content would be accessible only through purchase</h1>

            <button onClick={() => setPremium(false)}>Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
