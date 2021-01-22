import React from "react"
import axios from "axios"
import Card from "../../components/cards/cards"
import {connect} from "react-redux"
import "./Forecast.css"
class Forecast extends React.Component{
   state={
      
      list:[],
      datelist:[],
      icon:""
   }
   componentDidMount(){
      axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+this.props.cityname+"&units=metric&appid=bf73df6199bfd3a91c21add767aaaff6")
      .then((res)=>{
         // console.log(res.data.list[0].dt_txt.toString())
         this.setState({list:res.data.list})
         let list=this.state.list.map((el)=>el)
         let datelists=list.filter((el)=>el.dt_txt.includes("15:00:00"))
         this.setState({datelist:datelists})
      })
      
   }
   back=()=>{
      this.props.history.push("/")
   }
   render()
   

   {
      
      return(
         <div className="container   px-0 mt-4">
            <i onClick={this.back}  className="fa fa-arrow-circle-left" style={{fontSize:"48px",color:"red"}}></i>

            {this.state.datelist.map((el)=>{
               return(<Card  icon={el.weather[0].icon} lists={el}></Card>)
            })}
            
         </div>
      )
   }


}
const mapStateToProps=(state)=>{
   return{
      cityname:state.cityname
   }
}
export default connect(mapStateToProps)( Forecast)