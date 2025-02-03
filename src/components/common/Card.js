import React from 'react'
import './Card.css'

function Card({title, para, img, index, colour}) {
  return (
    <div className={'card-main'} style={{ backgroundColor: colour ? colour : null}}>
      <h3 className='card-title'>{title}</h3>
      <p className='card-para'>{para}</p>
      <img className={index === 1 ? 'card-img' : 'card-img-main'} src={img} alt="Card Image" />
    </div>
  )
}

export default Card
