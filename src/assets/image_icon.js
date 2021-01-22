import React from "react"
import "./image_icon.css"

const image=(props)=>{
   let url="https://openweathermap.org/img/wn/"+props.url+"@2x.png"
   return(
      <React.Fragment>
         <img className=" mainicon "  src={url}></img>
      </React.Fragment>
   )

}
export default image