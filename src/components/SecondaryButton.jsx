import React from 'react'

export const SecondaryButton = ({text, onClick}) => {
  return (
    <button className='seondary' onClick={onClick}>{text}</button>
  )
}
