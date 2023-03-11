import React from 'react';
import { Link } from 'react-router-dom';
import clinicIcon from '../images/clinic.png';
import teamIcon from '../images/team.png';
import gameIcon from '../images/game.png';
import profileIcon from '../images/profile.jpg';

//Component for showing the circular image links on the homepage

const CircleNav = () => {
  return (
    <div className="circle-nav">
      <Link to="/Clinic" className="circle-nav-link">
        <div className="circle-nav-image" style={{ backgroundImage: `url(${clinicIcon})` }}></div>
        <div className="circle-nav-text">Clinic</div>
      </Link>
      <Link to="/Medteam" className="circle-nav-link">
        <div className="circle-nav-image" style={{ backgroundImage: `url(${teamIcon})` }}></div>
        <div className="circle-nav-text">Med Team</div>
      </Link>
      <Link to="/Entertainment" className="circle-nav-link">
        <div className="circle-nav-image" style={{ backgroundImage: `url(${gameIcon})` }}></div>
        <div className="circle-nav-text">Entertainment</div>
      </Link>
      <Link to="/Profile" className="circle-nav-link">
        <div className="circle-nav-image" style={{ backgroundImage: `url(${profileIcon})` }}></div>
        <div className="circle-nav-text">My Profile</div>
      </Link>
    </div>
  );
}

export default CircleNav;