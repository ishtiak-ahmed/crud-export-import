import React from 'react'

export const DangerButton = ({text, onClick}) => {
  return (
    <button className='danger' onClick={onClick}>{text}</button>
  )
}
