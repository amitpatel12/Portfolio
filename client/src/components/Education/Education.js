import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {

    const data = [
        {
            name: "Adhyogik Vikas Inter College Basti",
            degree:"High School",
            stream:"Science",
            year : "2015",
            per:"84.4%"
        },

        {
            name: "Adhyogik Vikas Inter College Basti",
            degree:"Intermediate",
            stream:"Sciences",
            year : "2017",
            per:"77.6%"
        },


        {
            name: "Rajkiya Engineering College Banda",
            degree:"Bachelor of Technology",
            stream:"Information Technology",
            year : "2019-2023",
            per:"77.5%"
        },
    ]


    const colors = [
        "#1cb6c7",
        "#33d4c2",
        "#7603ec",
        "#31473a"
    ]

  return (
    <div className='container education-section' id='education'>
      <div className="section-title">
            <h5>Education</h5>
            <span className="line"></span>
        </div>


        <div className='timeline-section'>
        {
            
            <VerticalTimeline lineColor="gray">
                {data.map((item, index) => (
           
                    <VerticalTimelineElement 
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: "white" }}
                        contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
                        date={item.year}
                        dateClassName="data-class"
                        iconStyle={{ background: colors[index], color: "#fff" }}
                        icon={<FaGraduationCap />}
                        key={index}
                        >
                        <h3 className="vertical-timeline-element-title">{item.name}</h3>
                        <h6 className="vertical-timeline-element-subtitle" >{item.degree}</h6>
                        <p className='description' style={{color:"yellow",fontWeight:"600"}}>
                            {item.stream}
                        </p>
                        <p className='description'>
                            {item.per}
                        </p>


                    </VerticalTimelineElement>
           
                ))
}
             </VerticalTimeline>

           
        }
        </div>

    </div>
  )
}

export default Education
