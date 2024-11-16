import React from 'react'
import './TreeView.css'; 
import MenuList from './MenuList';

const TreeView = ({menus = []}) => {
  return (
    <div className='treeview-container'>
                <MenuList list={menus}/>  
    </div>
  )
}

export default TreeView
