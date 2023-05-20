import React from 'react'
import ScheduleCard from '../Reusable/ScheduleCard'

export default function CardBottom2() {
  return (
    <div style={{display:"flex", flexDirection:"column", gap: "1.2rem"}}>
        <ScheduleCard color = "#9BDD7C" title="Meeting with suppliers" time = "10:00-14:00" venue ="Ujjain,Madhya Pradesh"/>
        <ScheduleCard color = "#6972C4" title="Check operations" time = "16:00-18:00" venue ="Indore,Madhya Pradesh"/>
    </div>
  )
}
