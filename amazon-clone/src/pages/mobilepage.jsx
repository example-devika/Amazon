import React from 'react'
import { mobileData } from '../Data/Mobile-Data'
import Header from '../header'
import "./pages.css"
import { Link } from 'react-router-dom'


const Mobilespage = () => {
  return (
    <>
    <Header/>
    <div className='mobiles-section'>
      
        {
            mobileData.map((item)=>{
              return(
                <div className="mobilepage" key={item.id}>
                  <Link to={`/mobiles/${item.id}`}>
                  <div className="pageimg">
                  <img src={item.image} alt="mobiles" />
                  </div>
                  </Link>
                  <div className="mobile-details">
                    <h5>{item.company}</h5>
                    <h6>{item.model}</h6>
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

export default Mobilespage
