import React from 'react'
import {  useParams } from 'react-router-dom'
import { ACData } from '../Data/AC-Data'
import "./singles.css"
import Header from '../header'
import { useCart } from '../context/cartcontext'

const ACsingle = () => {
    const {id}=useParams()
    const product= ACData.find((item)=>item.id===id)
    console.log(product)
    const {cartItems,addToCart}=useCart()

  return (
    <div>
      <Header/>
                <div className="single-page" >
                    <div className="single-img">
                        <img src={product.image} alt="mobile" />
                    </div>
                    <div className="single-details">
                    <div className="single-company">
                        <h3>{product.company}</h3>
                    </div>
                    <div className="single-model">
                        <h5>{product.model}</h5>
                    </div>
                    <div className="single-price">
                        <h5><small>$</small>{product.price}</h5>
                    </div>
                    <div className="single-desc">
                        <p>{product.description}</p>
                    </div>
                    <button className='addtocart' onClick={() => addToCart(product)}>Add to cart</button>
                    </div>

                </div>
          
    </div>
  )
}

export default ACsingle
