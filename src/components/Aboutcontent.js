import "./Aboutcontent.css"; 
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/karthi2.jpg";

const Aboutcontent = () => {
  return (
    <div className="about">
      {/* Left Section */}
      <div className="left">
        <h2>Who am I?</h2>
        <p className="paragraph">
          I am a passionate and results-driven Full Stack Python Developer with a strong enthusiasm for building dynamic, user-centric web applications. My expertise spans both front-end and back-end development, where I specialize in working with frameworks like Django to craft scalable and efficient solutions.
        </p>
        <p className="paragraph">
          My journey into programming started with a Bachelor's degree in Electrical and Electronics Engineering, where I developed analytical problem-solving skills. Currently, I am expanding my expertise by pursuing a Full Stack Python course at Appin Technology, refining my knowledge in HTML, CSS, Bootstrap, JavaScript, React.js, Python, Django, and SQL.
        </p>
        <p className="paragraph">
          With hands-on experience working on various projects, I have gained a deep understanding of software development processes, including designing, testing, and maintaining applications. Beyond coding, I am committed to writing clean, maintainable code while implementing industry best practices to enhance user experience. Driven by a continuous learning mindset, I strive to innovate and contribute effectively to the tech industry.
        </p>
        <Link to="/contact">
          <button className="btn1">Contact</button>
        </Link>
      </div>

      {/* Right Section - Image Container */}
      <div className="right">
        <div className="img-container">
          <img src={React1} className="img" alt="React" />
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
