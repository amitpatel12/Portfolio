import {useState} from 'react'
import './Achievement.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Achievement = () => {
    const [showMoreTechStack, setShowMoreTechStack] = useState(9);

    const loadMore = () =>{
        setShowMoreTechStack((prev) => prev + 3)
    }
    const data = [
        {
            name:"Leetcode",
            data:"Solve 400+ Problems",
            url:'https://leetcode.com/amitpatel12/'
        },
        {
            name:"GeeksforGeeks",
            data:"Solve 200+ problems",
            url:'https://auth.geeksforgeeks.org/user/amitpatel12/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user'
        },
        {
            name:"Hacker Rank",
            data:"4 stars(*)"
        },
        {
            name:"Leetcode Weekly Contest",
            data:"Secure rank 1319 out of 23566"
        },
        {
            name:"Mega Job-a-thon(GFG)",
            data:"Secure ranke 187 out of 20666 participants"
        },
        

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
       "#AF0C16"
    ]

  return (
    <div className = "container techstack-section" id='achievement'>


        <div className="section-title">
            <h5>Achievement</h5>
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
                    <p className='achievement-data'>{item.name}</p>
                    {
                        item.url && <a href={item.url} style={{color:'black', cursor:'pointer', backgroundColor:'yellow', padding:'6px', borderRadius:'6px', textDecoration:'none'}}>Profile</a>
                    }
                    <p className='achievement-data'>{item.data}</p>
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

export default Achievement
