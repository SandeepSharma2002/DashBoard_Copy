import React from 'react'
import Card from '../Reusable/Card'
import "./CardList.css";

const dataToPost1= {
        id: "#DDEFE0",
        text : "Total Revenue",
        figures: "$2,124,234",
        icons: "fa fa-fw fa-money"
    };
    const dataToPost2={
        id:"#F4ECDD",
        text : "Total Transactions",
        figures: "1,343",
        icons: "fa fa-fw fa-share"
    };
    const dataToPost3= {
        id:"#EFDADA",
        text : "Total Likes",
        figures: "1,341",
        icons: "fa fa-fw fa-heart"
    };
    const dataToPost4 = {
        id: "#DEE0EF",
        text : "Total Users",
        figures: "842",
        icons: "fa fa-fw fa-users"
    };

export default function CardList() {
  return (
    <div className='CardList'>
        <Card Details = {dataToPost1}/>
        <Card Details = {dataToPost2}/>
        <Card Details = {dataToPost3}/>
        <Card Details = {dataToPost4}/>
    </div>
  )
}
