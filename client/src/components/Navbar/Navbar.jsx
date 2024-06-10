import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import axios from "axios";


const Navbar = ({city, setCity, setData}) => {
    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(!city) return "";
        const {data} = await axios.post(`http://localhost:8000/api/v1/weather`, {city});
        // console.log(data);
        setData(data);
    }
    console.log(city);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src={logo} alt="Loding" style={{ width: "60px" }} />
          <a className="navbar-brand" href="/">
            Forecast
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name= "city"
                value={city}
                onChange={(e)=>{setCity(e.target.value)}}
              />
              <button className="btn btn-outline-success" type="submit" onClick={handleSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;