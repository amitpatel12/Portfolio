import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Mycv from './cv.pdf'
import { BsFillMoonStarsFill,BsFillSunFill } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll"



const Home = ({theme, changeTheme}) => {
  return (

    <div className="container-fluid home" id="home">

      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (<p><BsFillMoonStarsFill size={25}/></p>): (<p className="sun-theme-icon"><BsFillSunFill size={25}/></p>)}
      </div>

      
      <div className="container home-content">

      <Fade right>
          
        
        <h1>HI I'm a </h1>
        <h2>
          <Typewriter
            options={{
              strings: ["FULLSTACK DEVELOPER", "MERN DEVELOPER", "PROBLEM SOLVER"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </h2>

        </Fade>


        <Fade bottom>
        <div className="button-for-action">
          <Link to="contact" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
          <div className="hire-me-button">
               
            Hire me
            
          </div>
            </Link>
          <div className="get-resume-button">
            <a href={Mycv} download='amit_cv.pdf'>
            Get Resume
            </a>
            
          </div>
        </div>
        </Fade>

      </div>
    </div>
  );
};

export default Home;
