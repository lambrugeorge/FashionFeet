import React from 'react'
import './Products.css'
import { AiFillStar } from 'react-icons/ai'


function Products() {
  return <>
    <section className='card-container'>
    <section className='card'>
      <img src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg' alt='Shoe' />
      <div className='card-details'>
      <h3 className='card-title'>Shoe</h3>
      <section className="card-reviews">
      <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
      </section>
      </div>
    </section>  
    </section>
  </>
  

  
}

export default Products