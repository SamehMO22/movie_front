import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userdata , logout}) {
    return <>

    <nav className='m-4 d-flex align-items-center justify-content-between flex-md-row flex-column'>


    <div className=' d-flex'>
        <h1 className='h3 m-0 pe-5'>MO<i className="fa-solid fa-crown ps-3"></i></h1>
        
        {userdata?<ul className='list-unstyled m-0 d-flex align-items-center '>
            
            <li  className='mx-3  '>
                <Link to="home">Home</Link>
            </li>
            <li  className='mx-3'>      
                <Link to="pepole">Pepole</Link>
            </li>
            <li  className='mx-3 '>
                <Link to="tv">Tv</Link>
            </li>
            <li  className='mx-3 '>
                <Link to="movies">Movies</Link>
            </li>
            
        </ul>:''}
        
    </div>


    <div className='d-flex align-items-center'>
        {/* <div className='.d-md-none'>
            <i className='mx-2 fab fa-facebook'></i>
            <i className='mx-2 fab fa-twitter'></i>
            <i className='mx-2 fab fa-linkedin'></i>
            <i className='mx-2 fab fa-instagram'></i>
            <i className='mx-2 fab fa-spotify'></i>
        </div> */}


        <ul className='m-0 d-flex align-items-center list-unstyled'>

            {userdata?<>
            <li  className='mx-3 '>
                <Link  onClick={logout} >logout</Link>
            </li>
            <li  className='mx-3'>      
                <Link to={"profile"}>profile</Link>
            </li>
            </>:<>
            <li  className='mx-3'>      
                <Link to={"register"}>register</Link>
            </li>
            <li  className='mx-3'>      
                <Link to={''}>login</Link>
            </li>
            </>}

            





            
            
            
            
            
            
        </ul>
    </div>
    </nav>
    
    
    
    </>
}

