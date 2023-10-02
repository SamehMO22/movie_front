import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import LogicPepole from '../PepoleLogic/LogicPepole'

export default function Pepole() {
  const [trindingTv, settrindingTv] = useState([])


  async function getData (){
    let {data} =await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  settrindingTv(data.results)
  } 

  useEffect(()=>{

    getData() 
    // console.log(trindingPepole);

  }
  ,[])
  return  <>
   <div className="row">
   {/* <h1 className=' text-center'>the Famouse Person in this time</h1> */}

{trindingTv.map((person , index)=> 
  <div key={index} className="col-md-2">
      <img className='w-100'  src={'https://image.tmdb.org/t/p/w500'+person.poster_path} alt='no imafe'></img> 
      {person.vote_average?<div className='vote position-absolute end-0 top-0 text-center '>{person.vote_average.toFixed(1)}</div>:''}
      <h2>{person.name}</h2>
      <p>{person.known_for_department}</p>

      </div>
  


)




}
   </div>
  </>
}

