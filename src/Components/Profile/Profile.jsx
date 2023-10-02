import React from 'react'

export default function Profile({userdata}) {
return<>


<h1>Name: {userdata.first_name}    {userdata.last_name}</h1>
<h1>email: {userdata.email}</h1>
<h1>age: {userdata.age}</h1>
<h1>id: {userdata._id}</h1>
{/* <h1>Name: {userdata.first_name}</h1> */}






</> 
}
