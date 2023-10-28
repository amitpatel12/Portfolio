import { useState } from "react";
import { FcExpand,FcCollapse } from "react-icons/fc";
import './Project.css'
import Zoom from 'react-reveal/Zoom';

const ProjectList = ({item},{key}) => {

    const [show, setShow] = useState(false)
    const handleShowandCollapse = () =>{
        setShow(!show);
    }

    const colors = [
        "#50899d",
       "#B367DC",
       "#D9CF27",
       "#ae1e51",
       "#7603EC",
       "#033E3E"
      
    ]
  return ( 
    <Zoom>
    <div 
    className={show ? "poject-list-opned project-list" : "project-list"} 
    onClick={handleShowandCollapse}
    onMouseEnter={() => setShow(true)}
    onMouseLeave={() => setShow(false)}
    >
        <div className = "title-and-collapse-option" key={key}>
            <h5>{item.name}</h5>
            <p>
                {
                    show ? <FcExpand size={20}/> : <FcCollapse size={20}/>
                }
            </p>
        </div>
        <div className="description">
        {
            show ?  <div>{item.des}</div> : <div>{item.des.substring(0,100)}...<p style={{color:"green"}}>Read More</p></div>
        }
        </div>
        
        

        <div className="row">
            {
                item.techused &&
                item.techused.map((tech, index) => (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}> 
                        <div className="tech-used-in-project">
                            <p style={{backgroundColor:colors[index]}}>{tech.techname}</p>
                        </div>
                     </div>
                )
            )
            } 
        </div>

        <div className="live-demo-button">
            <a href={item.projectlink} target="_">Live Demo</a>
            <a className="github" href={item.github} target="_">Github</a>
            {/* <p>{item.projectlink}</p> */}
        </div>
    </div>
    </Zoom>
  )
}

export default ProjectList
