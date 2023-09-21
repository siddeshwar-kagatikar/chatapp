import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

export default function Login() {

  const[user,setuser] = useState();

  const handlesignout = () => {
    setuser(null);
    document.getElementById("signInDiv").hidden = false;
  }

  function handleCallbackResponse(response){
    console.log("JWT ID token: " + response.credential)
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
    setuser(response.credential)
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id: "837771888992-joop1dl18keds0i58i4b1kgia7nqsj2l.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size:"large"}
    );

  },[]);

  // console.log({837771888992-joop1dl18keds0i58i4b1kgia7nqsj2l.apps.googleusercontent.com})
  return (
    <div>
     <div id="signInDiv">
     </div>
     
      {user&&<div>
        <img src={user.picture} alt="img"></img>
        <h3>{user.name}</h3>
        <button onClick={handlesignout}>logout</button>
      </div>}
    </div>
  )
}
