import React from 'react'
import './Sidebar.css'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import Category from './Category/Category'

function Sidebar() {
  return <>
     <section className='sidebar' >
       <div className='logo-container'>
             <h1>🛒</h1> 
       </div>
       <Category />
       <Price />
       <Colors />
     </section>  
  </>
}

export default Sidebar