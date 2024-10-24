import React from 'react'
import "../home.css"
import { ACData } from '../Data/AC-Data'

const AC = () => {
    const firstFiveImages=ACData.slice(0,5)
  return (
    <div className='products'>
                    <h1 className="protitle">AC </h1>
                    <div className="prosection proac">

        {
            firstFiveImages.map((item)=>{
                return(
                    <div className="proSection">
                    <div className="prodata">
                        <h5 className="promodel">{item.model}</h5>
                        <h5 className="price"><small>$</small><strong>{item.price}</strong></h5>

                        <img src={item.image} alt="" />
                    </div>

                </div>
                )
            })
        }
        </div>
      
      
    </div>
  )
}

export default AC
