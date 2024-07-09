import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
   <div>
     <h1>CRYPTO APP</h1>
     <nav>
       <ul>
         <li></li>
         <li></li>
       </ul>
     </nav>
     <Outlet></Outlet>
   </div>
  )
}

export default Layout;
