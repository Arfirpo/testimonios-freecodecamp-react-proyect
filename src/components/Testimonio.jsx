import React from 'react'

export const Testimonio = ({img, name, charge, testimony}) => {
  return (
    <div className='testimony-container'>
      <img className='testimony-img' src={img}/>
        <div className='testimony__text-container'>
          <p className='testimony__name'>{name}</p>
          <p className='testimony__charge'>{charge}</p>
          <p className='testimony__text'>{testimony}</p>
        </div>
    </div>
  )
}
