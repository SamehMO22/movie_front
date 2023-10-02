import React from 'react'
import Navbar from './../Navbar/Navbar';
import Fotter from './../Fotter/Fotter';
import {Outlet} from 'react-router-dom'

export default function Layout({userdata , logout}) {
  return (<>

  <Navbar userdata = {userdata} logout={logout}/>


  <div className='container'>
<Outlet>
  
</Outlet>


</div>



  <Fotter/>
  
  
  
  
  </>
    )
}
