import React from "react";
import "./App.css";
import Header from "./header";
import Home from "./home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Backtotop from "./backtotop";
import Footer from "./footer";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./Landingpage";
import Mobilespage from "./pages/mobilepage";
import Menwearpage from "./pages/menwearpage";
import Furniturepage from "./pages/furniturepage";
import TVpage from "./pages/TVpage";
import Womenwearpage from "./pages/womenwearpage";
import ACpage from "./pages/ACpage";
import Bookspage from "./pages/bookspage";
import Signuppage from "./forms/signuppage";
import Signinpage from "./forms/signinpage";
import Mobilesingle from "./singlepages/mobilesingle";
import Menwearsingle from "./singlepages/Menwearsingle";
import Womensingle from "./singlepages/womenwearsingle";
import TVsingle from "./singlepages/TVsingle";
import ACsingle from "./singlepages/ACsingle";
import Furnituresingle from "./singlepages/furnituresingle";
import Bookssingle from "./singlepages/bookssingle";
import Usercart from "./usercart";
import { useCart } from "./context/cartcontext";
import Checkout from "./checkout";



function App() {
  const {cartItems}=useCart()
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
     <Route path="/mobiles" element={<Mobilespage/>}/>
     <Route path="/menwear" element={<Menwearpage/>}/>
     <Route path="/furniture" element={<Furniturepage/>}/>
     <Route path="/tv" element={<TVpage/>}/>
     <Route path="/women" element={<Womenwearpage/>}/>
     <Route path="/AC" element={<ACpage/>}/>
     <Route path="/books" element={<Bookspage/>}/>
     <Route path="/register" element={<Signuppage/>}/>
     <Route path="/signin" element={<Signinpage/>}/>
<Route path="/mobiles/:id" element={<Mobilesingle/>}/>
<Route path="/menwear/:id" element={<Menwearsingle/>}/>
<Route path="/women/:id" element={<Womensingle/>}/>
<Route path="/tv/:id" element={<TVsingle/>}/>
<Route path="/AC/:id" element={<ACsingle/>}/>
<Route path="/furniture/:id" element={<Furnituresingle/>}/>
<Route path="/books/:id" element={<Bookssingle/>}/>
<Route path="/cart" element={<Usercart/>}/>
<Route path="/checkout" element={<Checkout/>}/>









    </Routes>
    
    </>
  );
}

export default App;
