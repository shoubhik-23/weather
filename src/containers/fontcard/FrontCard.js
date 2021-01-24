import React from "react";
import "./FrontCard.css";
import axios from "axios";
import Icon from "../../assets/image_icon";
import Detail from "../../components/details/detail";
import * as ac from "../../Store/Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Container } from "@material-ui/core";
import { Alert, Button } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import Spinner from "../../UI/Spinner";
import Modal from "../../UI/Modal";

class FrontCard extends React.Component {
  state = {
    loading: false,
    search_value: "",
    city_name: "delhi",
    lat: 0,
    long: 0,
    country_name: "country",
    icon: "",
    current_timestamp: 0,
    temperature: "",
    description: " ",
    current_date: 10,
    max_temp: 0,
    sunrise: 0,
    sunset: 0,
    min_temp: 0,
    feeling: 0,
    wind_speed: 0,
    wind_degree: 0,
    humidity: 0,
    cloudiness: 0,
    feeling: 0,
    visibility: 0,
    pressure: 0,
    error: false,
    myref: React.createRef(),
    show: true,

    showDetails: false,
    shownextday: false,
  };

  componentDidMount() {
    this.state.myref.current.focus();
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=bf73df6199bfd3a91c21add767aaaff6"
      )
      .then((res) => {
        let response = res.data;

        this.setState({
          cod: response.cod,
          api_data: response,
          city_name: response.name,
          icon: response.weather[0].icon,
          temperature: response.main.temp,
          current_date: response.dt,
          country_name: response.sys.country,
          visibility: response.visibility,
          humidity: response.main.humidity,
          pressure: response.main.pressure,
          sunrise: response.sys.sunrise,
          sunset: response.sys.sunset,
          current_timestamp: response.dt,
          max_temp: response.main.temp_max,
          min_temp: response.main.temp_min,
          feeling: response.main.feels_like,
          wind_speed: response.wind.speed,
          description: response.weather[0].description,
          cloudiness: response.clouds.all,
          wind_degree: response.wind.deg,
          long: response.coord.lon,
          lat: response.coord.lat,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate() {
    this.state.myref.current.focus();
  }
  showdetailshandler = () => {
    this.setState((previous) => {
      return {
        showDetails: true,
      };
    });
  };
  // showForecastHandler=()=>{
  //    this.props.getCity(this.state.city_name)

  // }
  hidedetailshandler = () => {
    this.setState({ showDetails: false });
  };
  hideforecasthandler = () => {
    this.setState({ shownextday: false });
  };

  submit = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            this.state.search_value +
            "&units=metric&appid=bf73df6199bfd3a91c21add767aaaff6"
        )
        .then((res) => {
          let response = res.data;

          console.log(response);
          this.setState({
            cod: response.cod,
            api_data: response,
            city_name: response.name,
            icon: response.weather[0].icon,
            temperature: response.main.temp,
            current_date: response.dt,
            country_name: response.sys.country,
            visibility: response.visibility,
            humidity: response.main.humidity,
            pressure: response.main.pressure,
            sunrise: response.sys.sunrise,
            sunset: response.sys.sunset,
            current_timestamp: response.dt,
            max_temp: response.main.temp_max,
            min_temp: response.main.temp_min,
            feeling: response.main.feels_like,
            wind_speed: response.wind.speed,
            description: response.weather[0].description,
            cloudiness: response.clouds.all,
            wind_degree: response.wind.deg,
            long: response.coord.lon,
            lat: response.coord.lat,

            search_value: "",
          });
          this.props.getCity(this.state.city_name);
        })
        .catch((error) => {
          console.log(error);
          this.setState({ error: true, show: true });
        });
      this.setState({ loading: false });
    }, 1500);
  };
  keyHandler = (e) => {
    if (e.key === "Enter") {
      this.submit();
    }
  };

  search_handler = (event) => {
    this.setState({ search_value: event.target.value });
  };

  render() {
    let alert = (
      <Alert
        variant="danger"
        show={this.state.show}
        onClose={() => this.setState({ show: false })}
        dismissible
      >
        <Alert.Heading className="text-center">
          Oops! Not Found. <span>Please Enter a valid query</span>
        </Alert.Heading>
      </Alert>
    );
    console.log(
      "render in front card called",
      this.state.city_name,
      this.state.error,
      this.state.show
    );
    let arr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let d = new Date(this.state.current_timestamp * 1000).getDay();
    console.log(
      new Date(this.state.current_timestamp * 1000).toLocaleTimeString()
    );
    let day = arr[d];
    let montharray = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month =
      montharray[new Date(this.state.current_timestamp * 1000).getMonth()];

    return (
      <React.Fragment>
        {this.state.error ? <div>{alert}</div> : null}

        <div className="container  mt-5  px-0 frontcard ">
          <div className=" row container pr-2 m-0 mb-2  justify-content-end ">
            <TextField
              autoFocus
              error={false}
              inputRef={this.state.myref}
              style={{
                marginTop: "4px",
                backgroundColor: "whitesmoke",
                borderRadius: "5px",
              }}
              onKeyDown={this.keyHandler}
              // className=" offset col-l-3 border border-primary"
              onChange={this.search_handler}
              placeholder="Enter city"
              value={this.state.search_value}
              label="City"
              variant="standard"
            />
            <Button size="md" variant="info">
              <SearchIcon
                style={{ fontSize: "150%", padding: "0" }}
              ></SearchIcon>
            </Button>

            {/* <Button
              startIcon={
                <SearchIcon
                  style={{ fontSize: "270%", padding: "0" }}
                ></SearchIcon>
              }
              variant="contained"
              onClick={this.submit}
              className=" p-0 bg-info text-white"
            ></Button> */}
          </div>

          <div className="container p-0 m-0  ">
            <div className="row p-0 m-0 ">
              <div className="col m-0 pl-3 left_side ">
                <h className=" m-0 p-0 h1 city">{this.state.city_name}</h>
                <p className="pl-5 h6">{this.state.country_name}</p>
                <div className="row p-0  m-0  ">
                  <div className="col h4 m-0 mt-3 p-0 text-center">
                    <i>{day}</i>
                  </div>
                </div>
                <div className="row m-0 mt-2 p-0 ">
                  <div className="col m-0 p-0   text-center date">
                    {new Date(this.state.sunrise * 1000).getDate()}
                    <span> {month}</span>
                  </div>
                </div>
                <div className="row m-0 mt-2 p-0 ">
                  <div className="col  m-0 p-0 leftparameter">Visibility: </div>
                  <div className="col m-0 p-1 leftvalue">
                    {" "}
                    {this.state.visibility}
                  </div>
                </div>

                <div className="row m-0 mt-2 p-0 ">
                  <div className="col m-0 p-0 leftparameter">Humidity:</div>
                  <div className="col m-0 p-0 leftvalue">
                    {this.state.humidity}
                  </div>
                </div>
                <div className="row m-0 mt-2 p-0  ">
                  <div className="col m-0 p-0 leftparameter">Pressure:</div>
                  <div className="col m-0 p-0  leftvalue">
                    {this.state.pressure}
                  </div>
                </div>

                <Link to="/forecast">
                  {" "}
                  <p className=" btn m-0  mt-5 ml-2 mb-2 more btn-success">
                    4 Days Forecast
                  </p>
                </Link>
              </div>
              {this.state.loading ? <Spinner></Spinner> : null}

              <div className="col m-0 p-0  right_side">
                <p className="h1 m-0 p-0 temperature">
                  {this.state.temperature} &#176;C
                </p>
                <Icon url={this.state.icon}></Icon>
                <div className="row m-0 mt-3 p-0  text-center">
                  <div className="col m-0 p-0 description">
                    {this.state.description}
                  </div>
                </div>
                <div className="row m-0 mt-2 p-0 ">
                  <div className="col m-0 p-0 rightparameter">Sunrise:</div>
                  <div className="col m-0 p-0 leftvalue">
                    {new Date(this.state.sunrise * 1000).getHours()}:00 am
                  </div>
                </div>
                <div className="row m-0 mt-2  p-0 ">
                  <div className="col m-0 p-0 rightparameter">Sunset:</div>
                  <div className="col m-0 p-0 rightvalue">
                    {new Date(this.state.sunset * 1000).getHours()}:00 pm
                  </div>
                </div>
                <div className="d-flex  mt-5 justify-content-center">
                  <div
                    onClick={this.showdetailshandler}
                    className=" btn btn-success more "
                  >
                    Detailed Info
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Detail
          details={this.state}
          show={this.state.showDetails}
          showhandler={this.hidedetailshandler}
        ></Detail>
        {/* <Coming show={this.state.shownextday} hide={this.hideforecasthandler}></Coming> */}
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCity: (name) => {
      console.log("dispataching", name);
      return dispatch(ac.getCityName(name));
    },
  };
};
export default connect(null, mapDispatchToProps)(FrontCard);
