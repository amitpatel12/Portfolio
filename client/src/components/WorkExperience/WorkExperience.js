import './WorkExperience.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { Link } from 'react-router-dom';

const WorkExperience = () => {

    const data = [
        {
            companyname:" Suven Consultants & Technology Pvt. Ltd.",
            position:"Web Developer",
            des:"I have designed 4 front-end websites similar to Hotstar, medium.com and animation sites.These sites are 365 Entertainment, Blogging, CSS3 Animation, and Voter registration.I used HTML, CSS3 and modern JavaScript to build these sites.",
            year:"May 2022",
            techskills:[
                {
                    techname:'HTML'
                },
                {
                    techname:'CSS'
                },
                {
                    techname:'JAVASCRIPT'
                },

            ]

        },
        {
            companyname:"Jethi Tech Solutions",
            position:"Frontend Developer",
            des:"I am currently engaged in numerous project designs utilizing ReactJS, Tailwind CSS, and Material UI. These designs are implemented through the utilization of Figma design tool",
            year:"May 2023 - Sept 2023",
            techskills:[
                {
                    techname:'React JS'
                },
                {
                    techname:'Tailwind CSS'
                },
                {
                    techname:'Material UI'
                },

            ]

        },

        // {
        //     companyname:"Amazon",
        //     position:"FullStack Developer",
        //     des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        //     year:"2019 - 2020",
        //     techskills:[
        //         {
        //             techname:'React JS'
        //         },
        //         {
        //             techname:'Node JS'
        //         },
        //         {
        //             techname:'Express JS'
        //         },
        //         {
        //             techname:'Material UI'
        //         }

        //     ]

        // },

        // {
        //     companyname:"Microsoft Corporation",
        //     position:"FullStack Developer",
        //     des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        //     year:"2020 - 2022",
        //     techskills:[
        //         {
        //             techname:'React JS'
        //         },
        //         {
        //             techname:'Node JS'
        //         },
        //         {
        //             techname:'Express JS'
        //         },
        //         {
        //             techname:'Material UI'
        //         }

        //     ]


        // },

        // {
        //     companyname:"Whatsapp",
        //     position:"FullStack Developer",
        //     des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        //     year:"2022 - Present",
        //     techskills:[
        //         {
        //             techname:'React JS'
        //         },
        //         {
        //             techname:'Node JS'
        //         },
        //         {
        //             techname:'Express JS'
        //         },
        //         {
        //             techname:'Material UI'
        //         }

        //     ]

        // },

        // {
        //     companyname:"Apple",
        //     position:"FullStack Developer",
        //     des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        //     year:"2018 - 2021",
        //     techskills:[
        //         {
        //             techname:'React JS'
        //         },
        //         {
        //             techname:'Node JS'
        //         },
        //         {
        //             techname:'Express JS'
        //         },
        //         {
        //             techname:'Material UI'
        //         }

        //     ]

        // }
    ]
    
    const colors = [
        "#0fa3b1",
        "#2E69B1",
        "#ed8b00",
        "#2d3142",
       "#a3f329",
       "#d295bf"
    ]


  return (
    <div className='container work-experience-section' id='workexperience'>
      <div className="section-title">
            <h5>Work Experience</h5>
            <span className="line"></span>
        </div>
        <div className='timeline-section'>
        {
            
            <VerticalTimeline lineColor="gray">
                {data.map((item, index) => (
           
                    <VerticalTimelineElement 
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: "white", fontWeight:300 }}
                        contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
                        date={item.year}
                        dateClassName="data-class"
                        iconStyle={{ background: colors[index], color: "#fff" }}
                        icon={<MdWork />}
                        key={index}
                        >
                        <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
                        <h6 className="vertical-timeline-element-subtitle" style={{color:"dark-yellow"}}>{item.position}</h6>

                        {
                            <div className='row'>
                                {item.techskills.map((tech,index) =>(
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}> 
                                    <div className="tech-skills">
                                        <p>{tech.techname}</p>
                                    </div>
                                 </div>
                                ))}
                            </div>
                        }
                        <p className='description work-des' style={{fontWeight:300,textAlign:'justify'}}>
                            {item.des}
                        </p>

                        <Link to={'/projects'} style={{color:'yellow'}}>Project</Link>


                    </VerticalTimelineElement>
           
                ))
}
             </VerticalTimeline>

           
        }
        </div>
    </div>
  )
}

export default WorkExperience
