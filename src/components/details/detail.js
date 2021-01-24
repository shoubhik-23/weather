import React from "react";
import "./detail.css";
const detail = (props) => {
  let csarray = ["container", "detail"];
  if (props.show == true) {
    csarray.push("show");
  }

  let design = (
    <div
      className="container detail"
      style={{
        opacity: props.show ? "1" : "0",
        transform: props.show ? "translateY(-75vh)" : "translateY(-1000px)",
      }}
    >
      <header className="h3">{props.details.city_name}</header>
      <div className="row align-items-end">
        <div className="col text-left ">Max Temp:</div>
        <div className="col border text-left pr-0">
          {props.details.max_temp}&#176; c
        </div>
        <div className="col text-left">Min Temp:</div>
        <div className="col text-left">{props.details.min_temp}&#176; c</div>
      </div>
      <div className="row align-items-end">
        <div className="col text-left">Wind Speed:</div>
        <div className="col text-left">{props.details.wind_speed}</div>
        <div className="col text-left">Wind Degree:</div>
        <div className="col text-left">{props.details.wind_degree}</div>
      </div>
      <div className="row align-items-end ">
        <div className="col text-left">Humidity:</div>
        <div className="col text-left">{props.details.humidity}</div>
        <div className="col text-left">Pressure:</div>
        <div className="col text-left">{props.details.pressure}</div>
      </div>
      <div className="row align-items-end ">
        <div className="col text-left">Visibility:</div>
        <div className="col text-left">{props.details.visibility}</div>
        <div className="col text-left">Cloudiness:</div>
        <div className="col text-left">{props.details.cloudiness}</div>
      </div>
      <div className="row align-items-end">
        <div className="col text-left">Feels like:</div>
        <div className="col text-left">{props.details.feeling}</div>
        <div className="col text-center">{props.details.description}</div>
        <div className="col text-left"></div>
      </div>
      <div className="row align-items-end ">
        <div className="col text-left">latitude:</div>
        <div className="col text-left">{props.details.lat}</div>
        <div className="col text-left">longitude:</div>
        <div className="col text-left">{props.details.long}</div>
      </div>

      <div className="text-center mt-5 mb-2">
        <button
          onClick={props.showhandler}
          className="btn btn-info border border-rounded text-dark "
        >
          OK
        </button>
      </div>
    </div>
  );

  return <React.Fragment>{design}</React.Fragment>;
};
export default detail;
