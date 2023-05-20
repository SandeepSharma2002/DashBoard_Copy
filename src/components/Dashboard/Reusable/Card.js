import React from 'react'
import "./Card.css";

export default function Card(props) {
    const{icons, text,figures,id} = props.Details; 
  return (
    <div className='Card' style={{background: id}}>
        <div className="icon">
        <i  className= {icons}/>
        </div>
        <div className="card_name">{text}</div>
        <din className="figures">{figures}</din>
    </div>
  )
}
