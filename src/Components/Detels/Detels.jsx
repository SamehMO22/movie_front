import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



export default function Detels() {

    const [itemDetiles, setitemDetiles] = useState({})
    const [itemSimelar, setitemSimelar] = useState([])

    let params = useParams()
    async function getDetiles (){
        
        let {data} =await axios.get(`https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
        setitemDetiles(data)

    }
    async function getSimelar (){
        
        let {data} =await axios.get(`https://api.themoviedb.org/3/${params.media_type}/${params.id}/similar?api_key=f1aca93e54807386df3f6972a5c33b50`)
        console.log('hi');
        setitemSimelar(data.results)
        console.log(data.results);


    }



    useEffect(()=>{
        getDetiles() 
        getSimelar()
    },[])







return <>
    <div className="row">
        <div className="col-md-5">
        {itemDetiles.poster_path?<img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+itemDetiles.poster_path} alt='images'></img>:''}
        {itemDetiles.profile_path?<img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+itemDetiles.profile_path} alt='no imafe'></img>:''}
        </div>

        <div className="col-md-7">
            <h1 className='h3'>{itemDetiles.name}{itemDetiles.title}</h1>
            <h2 className='h4'>vote:{itemDetiles.vote_average}</h2>
            <h2 className='h4'>vote counter:{itemDetiles.vote_count}</h2>
            {itemDetiles.overview?<p className=' text-white-50'><span className='h2'>overview</span>:{itemDetiles.overview}</p>:''}
            {itemDetiles.biography?<p className=' text-white-50'><span className='h2'>biography</span>:{itemDetiles.biography}</p>:''}
        </div>




    </div>
    <div className="row">
        {itemSimelar.slice(0,10).map((movie,index)=>    
        <div key={index} className=' col-md-2'>
        <Link to={'/detiels/'+movie.media_type+'/'+movie.id}>
                <div className='movie position-relative'>
                    {movie.poster_path?<img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt='images'></img>:''}
                    {movie.profile_path?<img className=' w-100' src={'https://image.tmdb.org/t/p/w500'+movie.profile_path} alt='no imafe'></img>:''}
                    <h3 className='h6 my-3'>{movie.title}  {movie.name}</h3>
                    {movie.vote_average?<div className='vote position-absolute end-0 top-0 text-center '>{movie.vote_average.toFixed(1)}</div>:''}
                </div>
            </Link>
            </div> )}
    </div>
    




</>
}
