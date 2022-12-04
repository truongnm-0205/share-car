import React from 'react';
export default function ButtonComponent(props){
  return <button onClick={props.onClick} className={`btn sc-background-color border-0  ${props.btnType?props.btnType:"btn-primary"} rounded-pill text-uppercase fw-bold`} 
      style={{color:"white",width:"100%",height:"50px"}} >
    {props.label}
  </button>
}
