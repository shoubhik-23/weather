import React from "react"
// import "./cardimage.css"

const image=(props)=>{
   let url="https://openweathermap.org/img/wn/"+props.url+"@2x.png"
   return(
      <React.Fragment>
         <img className="cardi "  src={url}></img>
      </React.Fragment>
   )

}
export default image