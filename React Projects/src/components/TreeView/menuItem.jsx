import React from 'react'

const MenuItem = ({item}) => {
  return (
    <li className='menu-item-container'>
        <p>{item.label}</p>
        <h2>{item.children}</h2>
    </li>
  )
}

export default MenuItem
