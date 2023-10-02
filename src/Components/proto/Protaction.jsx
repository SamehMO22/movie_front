import React from 'react'
import Login from './../Login/Login';



export default function Protaction({userdata , children ,saveuserdata }) {

        if(userdata == null){
            return <Login saveuserdata ={saveuserdata}/>
        }
        else{
            return children
        
        }
        
}
