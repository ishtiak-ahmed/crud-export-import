import React from 'react'

export const PrimaryButton = ({text, onClick}) => {
  return (
    <button className='primary' onClick={onClick}>{text}</button>
  )
}
