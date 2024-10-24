import React from 'react'
import "../home.css"
import { mensData } from '../Data/Mens-Data'

const Menwear = () => {
    const firstFiveImages=mensData.slice(0,5)
  return (
    <div className='products'>
                    <h1 className="protitle">MenWear</h1>
                    <div className="prosection proac">

        {
            firstFiveImages.map((item)=>{
                return(
                    <div className="proSection">
                    <div className="prodata">
                        <h5 className="promodel">{item.brand}</h5>
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

export default Menwear
