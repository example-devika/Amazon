import React from 'react'
import {  useParams } from 'react-router-dom'
import { mensData } from '../Data/Mens-Data'
import "./singles.css"
import Header from '../header'
import { useCart } from '../context/cartcontext'


const Menwearsingle = () => {
    const {id}=useParams()
    const product= mensData.find((item)=>item.id===id)
    console.log(product)
    const {addToCart}=useCart()||{}


  return (
    <div>
        <Header/>
      
                <div className="single-page" >
                    <div className="single-img">
                        <img src={product.image} alt="mobile" />
                    </div>
                    <div className="single-details">
                    <div className="single-company">
                        <h3>{product.brand}</h3>
                    </div>
                    <div className="single-model">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="single-price">
                        <h4><small>$</small>{product.price}</h4>
                    </div>
                    <div className="single-desc">
                        <p>{product.description}</p>
                    </div>
                    <button className='addtocart'  onClick={()=>addToCart(product)} >Add to cart</button>

                    </div>

                </div>
          
    </div>
  )
}

export default Menwearsingle
