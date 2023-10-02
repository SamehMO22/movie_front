import React from 'react'
import { Link } from 'react-router-dom';


export default function Fotter() {
  return <>

{/* fixed-bottom */}
<footer className="bg-dark text-center text-white fixed-bottom  ">
  {/* <!-- Grid container --> */}
  <div className="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></Link>

      {/* <!-- Twitter --> */}
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></Link>

      {/* <!-- Google --> */}
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></Link>

      {/* <!-- Instagram --> */}
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></Link>

      {/* <!-- Linkedin --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      {/* <!-- Github --> */}
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></Link>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" >
    samehhelwa7@gmail.com
    
  </div>
   
</footer>
  
  
  
  
  
  </>
}
