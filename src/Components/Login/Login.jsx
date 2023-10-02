import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login({saveuserdata}) {

  const [isLoadind, setisLoadind] = useState(false)

  const [erroe, seterroe] = useState([])
  const [datas, setdata] = useState({

    email:'',
    password:''

  })


  let navegat = useNavigate()


  function collectData(e){
    let mydata ={...datas}
    mydata[e.target.name]=(e.target.value)
    setdata(mydata)
    console.log(mydata);
  }

  async function sendData (){
    let {data} = await axios.post(`https://backend-movie-gilt.vercel.app/user/login` , datas)
    console.log(data);


    if(data.message === "Login Done"){
      localStorage.setItem('usertoken' , data.token)
      saveuserdata()
      navegat('/home')
      setisLoadind(false)

    }
    else{
      seterroe(data.message)
      setisLoadind(false)


    }


  }
  function startApi(e){
    setisLoadind(true)
    // e.preventDafault()
    e.preventDefault()

    sendData()

  }

  



  return <>

  <h1 className=' text-center'>hi i am Sameh ibrahim</h1>
  <h2 className=' text-center h3'>fullstack web development</h2>
  <p  className=' text-center h5 mb-5'>welcome in my website</p>


  <form onSubmit={startApi}>
    {erroe.length>0?    <div className="alert alert-danger">{erroe}</div>:''}
    <label htmlFor="email" className='ms-3 pb-2'> email :samehhealwa7@gmail.com</label>
    <input type="text" onChange={collectData} className=' form-control the-input mb-5 ' name='email' id='email' placeholder='enter your email'/>


    <label htmlFor="password" className='ms-3 pb-2'> password  123456</label>
    <input type="password" onChange={collectData} className=' form-control the-input mb-5' name='password' id='password' placeholder='enter your password'/>


    <button type="submit" className="btn btn-outline-info">{isLoadind===true ?<i className='fas fa-spinner fa-spin'></i>:'Login'}</button>
  </form>

  
  
  
  
  
  </>
}
