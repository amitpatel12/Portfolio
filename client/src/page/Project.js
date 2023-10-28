import React from 'react'
import './project.css'
import { Link } from 'react-scroll'
import project1 from '../Image/project1.png'
import project2 from '../Image/project2.png'
import project3 from '../Image/project3.png'
import project4 from '../Image/project4.png'

const Project = () => {
  const data = [
    {
      name:'StockChamp',
      path: project4,
      url:'https://jethitechsolutions.netlify.app/'
    },
    {
      name:'Jethi Tech Solutions',
      path: project1,
      url:'https://jethitechsolutions.netlify.app/'
    },
    {
      name:'ReeRoute Admin',
      path: project2,
      url:'https://reeroute-admin.netlify.app/'
    },

    {
      name:'INRE Admin',
      path: project3,
      url:'https://inre-admin.netlify.app/'
    },

   
  ]
  return (
    <div className='project_'>
      <div className='heading_text'>
        <p style={{fontSize:'33px', color:'white' }}>Internship Projects</p>
        <span className="line"></span>
      </div>

      <div className='Projects_cards'>
        {
          data.map(project=> (
            <div className='card project_card'>
            <img src={project.path} alt='project1' style={{borderRadius:'5px'}}/>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',}}>
                <p>{project.name}</p>
                <a href={project.url} target='_blank' className=''>Live</a>
            </div>
        </div>
          ))
        }


       
      </div>
    </div>
  )
}

export default Project
