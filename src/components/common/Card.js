import React from 'react'
import './Card.css'

function Card({title, para, img, index}) {
  return (
    <div className='card-main'>
      <h3 className='card-title'>{title}</h3>
      <p className='card-para'>{para}</p>
      <img className={index === 1 ? 'card-img' : ''} src={img} alt="Card Image" />
    </div>
  )
}

export default Card
