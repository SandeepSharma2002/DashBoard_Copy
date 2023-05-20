import React from 'react'
import "./ScheduleCard.css"
export default function ScheduleCard(props) {
  return (
    <div className='Schedules' style={{borderLeft :`5px solid ${props.color}`}}>
        <div className="schedule-Title">{props.title}</div>
        <div className="schedule-TV">{props.time}</div>
        <div className="schedule-TV">{props.venue}</div>
    </div>
  )
}
