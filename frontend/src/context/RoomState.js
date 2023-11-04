import { useState } from 'react';
import RoomContext from './roomContext';

const RoomState = (props) => {
    const host = `http://localhost:3001`
    const initialchats = []

    const [chatdata,setchatdata] = useState(initialchats)

  // fetchallchats
  const fetchdata = async (room_no) => {
    const response = await fetch(`${host}/api/room/fetchdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "autoken": localStorage.getItem('token')
      },
      body: JSON.stringify({room_no})
    });
    const json = await response.json();
    setchatdata(json)
  }

  //create room
  const createroom = async (room_no) => {
    const response = await fetch(`${host}/api/room/createroom`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "autoken": localStorage.getItem('token')
        },
        body: JSON.stringify({room_no})
      });
     const c = await response.json();
      // setchatdata(chatdata.concat(c));
  }

  //updatechat
  const addchat = async (room_no,data) => {
    const response = await fetch(`${host}/api/room/updateroom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "autoken": localStorage.getItem('token')
      },
      body: JSON.stringify({room_no,data})
    });

    const json = await response.json();
    console.log(json)
    // setchatdata(json);
  }

  return (
    // eslint-disable-next-line 
    <RoomContext.Provider value={{ chatdata,fetchdata,addchat,createroom }}>
      {props.children}
    </RoomContext.Provider>
  )

}


export default RoomState;