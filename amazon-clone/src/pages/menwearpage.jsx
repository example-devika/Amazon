import React from 'react'
import Header from '../header'
import "./pages.css"
import { mensData } from '../Data/Mens-Data'
import { Link } from 'react-router-dom'


const Menwearpage = () => {
  return (
    <>
    <Header/>
    <div className='mobiles-section'>
      
        {
            mensData.map((item)=>{
              return(
                <div className="mobilepage" key={item.id}>
                  <Link to={`/menwear/${item.id}`}>
                  <div className="pageimg">
                  <img src={item.image} alt="mobiles" />
                  </div>
                  </Link>
                  <div className="mobile-details">
                    <h5>{item.brand}</h5>
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

export default Menwearpage
