import "./SidebarList.css";
import Profilepic from '../../Image/amit_p1.jpg'
import {
  FcContacts,
  FcFactory,
  FcHome,
  FcNightPortrait,
  FcSalesPerformance,
  FcTodoList,
} from "react-icons/fc";
import { MdBiotech, MdCastForEducation } from "react-icons/md";
import {Link} from "react-scroll"

const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={Profilepic} alt="profile picture" />
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
                <FcHome size={25} /> Home
              </Link>
              
            </li>


            <li className="nav-item">
            <Link to="about" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcNightPortrait size={25} />
              About
              </Link>
            </li>


            <li className="nav-item">
            <Link to="workexperience" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcFactory size={25} />
              Work Experience
              </Link>
            </li>

            <li className="nav-item">
            <Link to="techstack" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <MdBiotech size={25} color="orange" />
              Tech Stack
              </Link>
            </li>
            
            <li className="nav-item">
            <Link to="education" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <MdCastForEducation size={25} color="yellow"/>
              Education
              </Link>
            </li>

            <li className="nav-item">
            <Link to="project" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcTodoList size={25} />
              Projects
              </Link>
            </li>

            <li className="nav-item">
            <Link to="achievement"  
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcSalesPerformance size={25} />
              Achievement
              </Link>
            </li>

            <li className="nav-item">
            <Link to="contact" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcContacts size={25} />
              Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-item-only-icons">
           <ul>
            <li className="nav-item">
              <Link to="home" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
                <FcHome size={25} />
              </Link>
              
            </li>


            <li className="nav-item">
            <Link to="about" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcNightPortrait size={25} />
             
              </Link>
            </li>


            <li className="nav-item">
            <Link to="workexperience" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcFactory size={25} />
             
              </Link>
            </li>

            <li className="nav-item">
            <Link to="techstack" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <MdBiotech size={25} color="orange" />
              
              </Link>
            </li>
            
            <li className="nav-item">
            <Link to="education" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <MdCastForEducation size={25} color="yellow"/>
             
              </Link>
            </li>

            <li className="nav-item">
            <Link to="project" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcTodoList size={25} />
             
              </Link>
            </li>

            <li className="nav-item">
            <Link to="testimonial"  
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcSalesPerformance size={25} />
              
              </Link>
            </li>

            <li className="nav-item">
            <Link to="contact" 
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
              >
              <FcContacts size={25} />
             
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SidebarList;
