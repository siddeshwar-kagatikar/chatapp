import { useEffect, useState } from 'react';
import './App.css';
import Client from './components/Client'; 
import RoomState from './context/RoomState'; 


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
    <div className="App">
      <RoomState>
        <Client/>
      </RoomState>

    </div>
  );
}

export default App;
