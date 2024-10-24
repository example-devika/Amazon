import React from 'react'
import "../home.css"
import { furnitureData } from '../Data/Furniture-Data'

const Furniture = () => {
    const firstFiveImages=furnitureData.slice(0,5)
  return (
    <div className='products'>
                    <h1 className="protitle">Furniture </h1>
                    <div className="prosection">

        {
            firstFiveImages.map((item)=>{
                return(
                    <div className="proSection">
                    <div className="prodata pro">
                        <h5 className="promodel">{item.model}</h5>
                        <h5 className="price"><small>$</small><strong>{item.price}</strong></h5>

                        <img src={item.image} alt="furniture" />
                    </div>

                </div>
                )
            })
        }
        </div>
      
      
    </div>
  )
}

export default Furniture;
