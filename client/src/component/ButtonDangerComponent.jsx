export default function ButtonDangerComponent(props){
    return <button onClick={props.onClick} className={`btn border-0 btn-danger rounded-pill text-uppercase fw-bold`} 
        style={{color:"white",width:"100%",height:"50px"}} >
      {props.label}
    </button>
  }