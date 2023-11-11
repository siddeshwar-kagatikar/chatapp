import React,{ useEffect,useState,useContext } from 'react'
import roomContext from '../context/roomContext'
// import { Navigate } from "react-router-dom";

function Doctors() {
  // const navigate = useNavigate;
  const context = useContext(roomContext)
    const { sethalfroom } = context
      const onclick = () => {
        sethalfroom("Neurology")
        // navigate("/client")
      }
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={onclick}>Neurology</button>
      <button type="button" className="btn btn-primary">Cardiology</button>
      <button type="button" className="btn btn-primary">Kidneylogy</button>
      <button type="button" className="btn btn-primary">Liverlogy</button>    
    </div>
  )
}

export default Doctors
