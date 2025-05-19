import React from 'react';
import bgport7 from "../assets/bgport7.jpg";
import "./Homehero.css";
import { Link } from "react-router-dom"; // ✅ Use React Router instead of react-scroll

const Homehero = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='bgport7-img' src={bgport7} alt="bgport7" />
      </div>
      <div className='content'>
        <p>Hi, I am Veerakumari.L</p>
        <h1>Full Stack Python Developer</h1>
        
        {/* ✅ Updated buttons to use React Router */}
        <Link to="/projects" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  );
}

export default Homehero;
