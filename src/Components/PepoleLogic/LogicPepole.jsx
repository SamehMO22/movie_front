import React from 'react'

export default function LogicPepole({person}) {
  return <>


<div className="col-md-2">
      <img className='w-100'  src={'https://image.tmdb.org/t/p/w500'+person.profile_path} alt='no imafe'></img>      
      <h2>{person.name}</h2>
      <p>{person.known_for_department}</p>

      </div>
  
  
  
  </>
}
