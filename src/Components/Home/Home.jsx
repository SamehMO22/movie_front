import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieLogic from '../MovieLogic/MovieLogic'

export default function Home() {
  const [trindingMovies, settrindingMovies] = useState([])
  const [trindingTv, settrindingTv] = useState([])
  const [trindingPepole, settrindingPepole] = useState([])


  async function getData (back , set){
    let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${back}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    set(data.results)
  } 

  useEffect(()=>{

    getData('movie' , settrindingMovies) 
    getData('tv' , settrindingTv) 
    getData('person' , settrindingPepole) 

  }
  ,[])




  return <>


  <div className="row  my-5">
    <div className="col-md-4 d-flex align-items-center">
      <div>
        <div className='border w-25'></div>
        <h3 className=' pt-2'>Trinding <br />movies <br />to watch Right now</h3>
        <p>most watched movies by Days</p>
        <div className='border w-100'></div>

      </div>
    </div>


    {trindingMovies.map((movie , index)=><MovieLogic movie = {movie} key={index}/>)}
  </div>


  <div className="row my-5">
    <div className="col-md-4 d-flex align-items-center">
      <div>
        <div className='border w-25'></div>
        <h3 className=' pt-2'>Trinding <br />movies <br />to watch Right now</h3>
        <p>most watched movies by Days</p>
        <div className='border w-100'></div>

      </div>
    </div>
    {trindingTv.map((movie , index)=><MovieLogic movie = {movie} key={index}/>)}
  </div>




  <div className="row  m-5 pb-5">
    <div className="col-md-4 d-flex align-items-center">
      <div>
        <div className='border w-25'></div>
        <h3 className=' pt-2'>Trinding <br />movies <br />to watch Right now</h3>
        <p>most watched movies by Days</p>
        <div className='border w-100'></div>

      </div>
    </div>
    {trindingPepole.map((movie , index)=> 
      
      <div className="col-md-2">
      <img className='w-100'  src={'https://image.tmdb.org/t/p/w500'+movie.profile_path} alt='no imafe'></img>      
      <h2>{movie.name}</h2>
      <p>{movie.known_for_department}</p>
      
 
</div>)}
  </div>
    
  
  
  
  
  
  
  </>
}
