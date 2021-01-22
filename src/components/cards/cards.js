import React from "react"
import Image from "../../assets/cardimage"
import "./cards.css"
const cards=(props)=>{
   let arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   let day=arr[new Date(props.lists.dt_txt).getDay()]

   return(
      <React.Fragment>
         <div className="container mb-4 mx-0 pt-2 px-0 fcards  ">
            <h4 className="h4">{day}</h4>
            
            
            <div className="row px-0 mx-0 ">
            <div className="col-4 px-0 mx-0  text-center">
               <h className="h4">{props.lists.main.temp} &#176;C</h><Image url={props.icon} ></Image></div>
            <div className="col-4 mx-0  px-0 h5 text-center  ">
               <p className="description">{props.lists.weather[0].description}</p>
               <div className="mt-5 px-0 row mx-0 ">
               <div className="col mx-0  px-0 text-center"><strong>Max :</strong> <i>{props.lists.main.temp_max} </i></div>
               <div className="col mx-0 mx-0   px-0 text-center"><strong>Min:</strong> <i>{props.lists.main.temp_min}</i></div>
               </div>
            </div>
            <div className="col-4 pt-3 px-0 h5 mx-0  text-center ">
            <div className="row px-0 mx-0  flex-column  ">
               <div className="col px-0  mx-0  text-center mb-4"><strong>Humidity:</strong><i> {props.lists.main.humidity} </i></div>
               
               <div className="col px-0 mx-0  text-center"><strong> Visibility:</strong><i> {props.lists.visibility}</i></div>
               </div>
            </div>

            
            
            </div>
           
         </div>

      </React.Fragment>
   )
}
export default cards