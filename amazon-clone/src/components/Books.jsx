import React from 'react'
import "../home.css"
import { booksData } from '../Data/Books-Data'

const Books= () => {
    const firstFiveImages=booksData.slice(0,5)
  return (
    <div className='products'>
                    <h1 className="protitle">Books </h1>
                    <div className="prosection ">

        {
            firstFiveImages.map((item)=>{
                return(
                    <div className="proSection ">
                    <div className="prodata pro">
                        <h5 className="pro-title">{item.title}</h5>
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

export default Books
