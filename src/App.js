import './App.css';
import {Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Regisre/Register';
import Movies from './Components/Movies/Movies';
import Pepole from './Components/Pepole/Pepole';
import Tv from './Components/Tv/Tv';
import { useEffect, useState } from 'react';
// import jwtDecode from '';
import jwtDecode from 'jwt-decode';
import Profile from './Components/Profile/Profile';
import Protaction from './Components/proto/Protaction';
import Detels from './Components/Detels/Detels';



function App() {
  

  useEffect(() => {
    if(localStorage.getItem('usertoken') !==null){
      saveuserdata()

    }
  
  
  }, [])

  const [userdata, setuserdata] = useState(null)


  function logout (){
    localStorage.removeItem('usertoken')
    setuserdata(null)
    console.log('hi');

    return<Navigate to='/login'/>





  }

  function saveuserdata (){
    let decodettoken = localStorage.getItem('usertoken')
    let incodetoken = jwtDecode(decodettoken)
    setuserdata(incodetoken)
    // console.log(incodetoken);
  }



  let farah = createBrowserRouter([
    {path:'' ,element:<Layout userdata={userdata} logout={logout}/> , children:[
      {path:'home' , element:<Protaction userdata = {userdata} saveuserdata={saveuserdata}><Home/></Protaction>},
      {path:'' , element:<Login saveuserdata={saveuserdata}/>},
      {path:'register' , element:<Register/> },
      {path:'movies' , element:<Protaction userdata = {userdata}  saveuserdata={saveuserdata}><Movies/></Protaction>},
      {path:'pepole' , element:<Protaction userdata = {userdata} saveuserdata={saveuserdata}><Pepole/></Protaction>},
      {path:'profile' , element:<Protaction userdata = {userdata} saveuserdata={saveuserdata}><Profile userdata={userdata}/></Protaction>},
      {path:'tv' , element:<Protaction userdata = {userdata} saveuserdata={saveuserdata}><Tv/></Protaction>}, 
      {path:'detiels/:media_type/:id/' , element:<Protaction userdata = {userdata} saveuserdata={saveuserdata}><Detels/></Protaction>}, 
    
    ]}
  ])




  return <>

<RouterProvider router={farah}/>  
  
  
  </>
}

export default App;
