import React from 'react'
import "./Card2.css";

export default function Card2(props) { 
  return (
    <div className='Card2'>
        <div className="first_row">
        <div className="Row_title">
        {props.title}
        </div>
        <div className="Card_text">{props.text}</div>
        </div>
        <div className="Charts">{props.component}</div>
    </div>
  )
}