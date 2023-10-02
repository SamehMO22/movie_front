import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LogicPepole from '../PepoleLogic/LogicPepole'

export default function Pepole() {
  const [trindingPepole, settrindingPepole] = useState([])


  async function getData (){
    let {data} =await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  settrindingPepole(data.results)
  } 

  useEffect(()=>{

    getData() 
    // console.log(trindingPepole);

  }
  ,[])
  return  <>
   <div className="row">
   <h1 className=' text-center'>the Famouse Person in this time</h1>

{trindingPepole.map((person , index)=><LogicPepole person = {person} key={index}/>


)




}
   </div>
  </>
}
