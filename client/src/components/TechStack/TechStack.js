import {useState} from 'react'
import './TechStack.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const TechStack = () => {

    const [showMoreTechStack, setShowMoreTechStack] = useState(9);

    const loadMore = () =>{
        setShowMoreTechStack((prev) => prev + 3)
    }
    const data = [
        {
            name:"C language",
        },
        {
            name:"C++ language",
        },
        {
            name:"React Js",
        },
        {
            name:"Node Js",
        },
        {
            name:"Express Js",
        },
        {
            name:"HTML"
        },
        {
            name:"CSS"
        },
        {
            name:"JavaScript",
        },
        {
            name:"Material UI"
        },
        {
            name:"Bootstrap"
        },
        {
            name:"MongoDB",
        },
        {
            name:"AWS",
        },
        {
            name:"Python",
        },
        {
            name:"Git",
        },
        
        {
            name:"Responsive Design",
        }

    ]

    const color = [
       "#46cd7f",
       "#c3643c",
       "#f3255a",
       "#a3f329",
       "#fef042",
       "#e50bf3",
       "#30315b",
       "#33d4c2",
       "#7603ec",
       "#6fed70",
       "#0f0721",
       "#439feb",
       "#704efc",
       "#AF0C16",
       "#a3f000",
    ]

  return (
    <div className = "container techstack-section" id='techstack'>


        <div className="section-title">
            <h5>Tech Stack</h5>
            <span className="line"></span>
        </div>
        
      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) =>(
            <Fade right key={index}>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className ={index === 0 ? "tech-content-marked tech-content" :"tech-content" } >
                    <span className="tech-number" style = {{backgroundColor: color[index]}}>
                        {index +1}
                    </span>
                    <p>{item.name}</p>
                </div>
                
            </div>
            </Fade>
        ))}
      </div>

    {
        showMoreTechStack >= data.length ? null : (
            <Zoom>
            <span className="load-more-tech-stack" onClick={loadMore}>
            Load More
            </span>
            </Zoom>
        )
    }
     
    </div>
  )
}

export default TechStack
