import '../css/app.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {GiHospitalCross} from "react-icons/gi";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";

function Navbar(){
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to = "/" className="navbar-logo">
            <GiHospitalCross className="navbar-icon" />
            Clyde Childrens Hospital
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/clinic" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                  Clinic                  
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/medteam" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}onClick={closeMobileMenu}>
                  Med Team
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/entertainment" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}onClick={closeMobileMenu}>
                  Entertainment
                </NavLink>
                </li>
            </ul>
        </div>
      </nav>
    </>
    );
  }

export default Navbar;