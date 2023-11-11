import { useEffect, useState } from 'react';
import './App.css';
import Client from './components/Client'; 
import RoomState from './context/RoomState'; 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Check from './components/Check';
import Doctors from './components/Doctors';


function App() {
  const [data,setdata] = useState("null")

  // const fetchdata = async () => {
  //   const response = await fetch(`/api/ml`,{
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "text",
  //     },
  //   });

  //   const data = await response
  //   setdata(data)
  // }

  useEffect(() => {
    fetch("/api/ml").then(res => res.json()).then(data => setdata(data.prediction_str))
  },[])
  console.log(data)
  return (
    <>
      <RoomState>
      <BrowserRouter>
        <div className='container'>
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
          <Route exact path="/chatbot" element={<Client/>}>
          </Route>
        </Routes>
        </div>  
      </BrowserRouter>
        {/* <Login/> */}
        {/* <Check /> */}
        {/* <Client/> */}
        {/* <Doctors/> */}
      </RoomState>

    </>
  );
}

export default App;
