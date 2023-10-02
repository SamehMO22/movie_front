import React, { useState } from 'react'
import axios from './../../../node_modules/axios/lib/axios';
import {useNavigate} from 'react-router-dom'
import Joi from 'joi'



export default function Register() {


  let  navegat = useNavigate()

  const [validerroe, setvaliderroe] = useState([])
  const [error, seterror] = useState('')
  const [isLoadind, setisLoadind] = useState(false)
  const [myData, setmyData] = useState(
  { 
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    age:""}
  )


  function detDataFromInput(e){
    let DataValue = {...myData}
    DataValue[e.target.name] = e.target.value
    setmyData(DataValue)
    console.log(DataValue);

  }

  async function getDataFromApi (){
    let {data} = await axios.post(`https://backend-movie-gilt.vercel.app/user/add` , myData)
    console.log({data});
    if(data.message === 'success'){
      navegat('/')
      setisLoadind(false)
    }
    else{
      seterror(data.message)
      setisLoadind(false)

    }
  }


  function startRun (e){
    setisLoadind(true)
    e.preventDefault()
    let validationerror= validationRegister()

    if(validationerror.error){
      setvaliderroe(validationerror.error.details)
      // console.log(validationerror.error.details);
      // setisLoadind(false)
    }
      else{
      getDataFromApi ()
      setisLoadind(false)
    }
  }


function validationRegister (){
    let schema = Joi.object({
    first_name:Joi.string().min(5).max(10).required(),
    last_name:Joi.string().min(5).max(10).required(),
    email : Joi.string().email({tlds:{allow:['com' ,'net']}}).required(),
    password:Joi.string().required(),
    age:Joi.number().min(18).max(80).required()
  })
  // console.log( schema.validate(myData ,{abortEarly :false}));

  return schema.validate(myData , {abortEarly :false});



}



  return  <>

  {validerroe.map((err,index)=>
  <div key={index} className="alert alert-danger">{err.message}</div>)}


<div className="row">
  {error.length>0 ?   <div className="alert alert-danger">{error}</div>:''}
<form onSubmit={startRun}>

    <label htmlFor="first_name" className='ms-3'> first_name</label>
    <input type="text" onChange={detDataFromInput} className=' form-control the-input mb-5' name='first_name' id='first_name' />


    <label htmlFor="last_name" className='ms-3'> last_name</label>
    <input type="text" onChange={detDataFromInput} className=' form-control the-input mb-5 ' name='last_name' id='last_name' />

    <label htmlFor="email" className='ms-3'> email</label>
    <input type="text" onChange={detDataFromInput} className=' form-control the-input mb-5 ' name='email' id='email' />


    <label htmlFor="password" className='ms-3'> password</label>
    <input type="password" onChange={detDataFromInput} className=' form-control the-input mb-5' name='password' id='password' />


    <label htmlFor="age" className='ms-3'> age</label>
    <input type="numper" onChange={detDataFromInput} className=' form-control the-input mb-5' name='age' id='age' />


    


    <button type="submit" className="btn btn-outline-info">{isLoadind===true ?<i className='fas fa-spinner fa-spin'></i>:'Register'}</button>







  </form>
</div>
  

  
  </>
}
