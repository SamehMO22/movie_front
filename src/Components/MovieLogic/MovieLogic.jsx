import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieLogic({movie}) {
    return <>
    
    
    
    
    
<div className=' col-md-2'>


<Link to={'/detiels/'+movie.media_type+'/'+movie.id}>
        <div className='movie position-relative'>

            {movie.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt='images'></img>:''}
            {movie.profile_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.profile_path} alt='no imafe'></img>:''}
            <h3 className='h6 my-3'>{movie.title}  {movie.name}</h3>
            {movie.vote_average?<div className='vote position-absolute end-0 top-0 text-center '>{movie.vote_average.toFixed(1)}</div>:''}
            
        </div>
    </Link>
    </div>
</>
}
    


