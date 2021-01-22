import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Layout from "../src/components/layout/layout"
import Forecast from "../src/containers/Forecast/Forecast"
import {Route,Redirect} from "react-router-dom"
import FrontCard from "../src/containers/fontcard/FrontCard"

class App extends React.Component{
  render(){

      
    return(
      <React.Fragment>
        <Layout>
          <Redirect to="/"></Redirect>
          <Route exact path="/" component={FrontCard}></Route>
          <Route  path="/forecast" component={Forecast}></Route>
        </Layout>
        
        
        
      </React.Fragment>
    )
  }
}

 

export default App;
