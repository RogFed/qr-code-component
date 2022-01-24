import React from 'react'

import qrCode from '../images/qr-code.png'

import '../styles/Card.scss'

const Card = () => (
  <section className='Card'>
    <div className='Card__code'>
      <img src={qrCode} alt='Frontend Mentor Website QR Code' />
    </div>
    <div className='Card__info'>
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  </section>
)

export default Card
