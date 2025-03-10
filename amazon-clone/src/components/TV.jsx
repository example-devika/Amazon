import React from 'react'
import "../home.css"
import { TVData } from '../Data/Tv-Data'

const TV= () => {
    const firstFiveImages=TVData.slice(0,5)
  return (
    <div className='products'>
                    <h1 className="protitle">TV </h1>
                    <div className="prosection ">

        {
            firstFiveImages.map((item)=>{
                return(
                    <div className="proSection ">
                    <div className="prodata pro">
                        <h5 className="pro-title">{item.model}</h5>
                        <h5 className="price"><small>$</small><strong>{item.price}</strong></h5>

                        <img className="book" src={item.image} alt="books" />
                    </div>

                </div>
                )
            })
        }
        </div>
      
      
    </div>
  )
}

export default TV
