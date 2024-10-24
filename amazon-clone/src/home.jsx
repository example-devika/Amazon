import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./home.css"
import AC from './components/AC';
import Books from './components/Books';
import Furniture from './components/furniture';
import Menwear from './components/Menwear';
import Mobiles from './components/Mobile';
import WomanWear from './components/woman';
import TV from './components/TV';
import Backtotop from './backtotop';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className='home-container'>
        <img alt="Great Indian Festival" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase2/J24_P2_GW_PC_EventHero_NTA_2x_V2._CB544902773_.jpg" height="100%" width="1366px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase2/J24_P2_GW_PC_EventHero_NTA_2x_V2._CB544902773_.jpg"/>
    </div>
    <div className="products-info">
    <Books/>
    <AC/>
    <Furniture/>
    <Menwear/>
    <Mobiles/>
    <WomanWear/>
    <TV/>
    </div>

    <div className="signin">
    <hr/>

      <h3>See personalised recommendations</h3>
      <div className="customer">
      <a href="" className='btn'>signin </a>
      <small>New customer?<Link to="/register">start here</Link></small>
      </div>
      <hr />
  
    </div>

    </>
  )
}

export default Home;
