import React from "react"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
// import Navbar from "../navbar/navbar"
import FrontCard from "../../containers/fontcard/FrontCard"
import Detail from "../details/detail"
import Forecast from "../../containers/Forecast/Forecast"
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
const layout=(props)=>{
   return(
      <React.Fragment>
         <div className="container-fluid">
         <Navbar  collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand ></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav >About </Nav>
      <Nav >Pricing</Nav> */}
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

<div className=" ">{props.children}</div>
<div className="h6 shoubhik text-center">Shoubhik Production</div>
<div className="h6 text-center"> &#169;	 2020</div>
</div>

         
      </React.Fragment>

   )

}
export default layout