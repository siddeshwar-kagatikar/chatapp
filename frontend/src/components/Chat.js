import React from 'react'
import './chat.css'


export default function Chat(props) {
  return (
    <div>
      <div className="chatbox">
          {props.texts.map((text) => {
            return <div className='bg-text' id={props.name === text.name ? "you" : "other"}>
              <div className="text"  key={text.message} >
              <div className='mx-2' style={{textAlign:'left',fontSize:'11px',color:'rgba(228, 184, 5, 0.76)'}}>{text.name}: </div>
              {text.message}
              <div key={text.message}><div className='mx-2' style={{textAlign:'right',fontSize:'11px',color:'rgba(228, 184, 5, 0.76)'}}>{props.date}</div>
              </div>
              </div>
              </div>
          })}
        </div>
        {/* id={props.name === text.name ? "you" : "other"} */}
        {/* rgba(228, 184, 5, 0.76) */}
      </div>
  )
}
