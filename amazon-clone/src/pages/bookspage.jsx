import React from 'react'
import Header from '../header'
import "./pages.css"
import { booksData } from '../Data/Books-Data'
import { Link } from 'react-router-dom'



const Bookspage = () => {
  return (
    <>
    <Header/>
    <div className='mobiles-section'>
      
        {
            booksData.map((item)=>{
              return(
                <div className="mobilepage" key={item.id}>
                  <Link to={`/books/${item.id}`}>
                  <div className="pageimg">
                  <img src={item.image} alt="mobiles" />
                  </div>
                  </Link>
                  <div className="mobile-details">
                    <h5>{item.title}</h5>
                    <h6>{item.author}</h6>
                    <h5><small>$</small>{item.price}</h5>
                  </div>
                </div>
              )
            })

        }
      
    </div>
    </>
  )
}

export default Bookspage
