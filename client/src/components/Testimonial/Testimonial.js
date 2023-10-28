import React from 'react'
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from 'react-reveal/Zoom';

const Testimonial = () => {

    const data = [
        {
            name: "John",
            position: "CEO",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

        {
            name: "Emily",
            position: "Product Manager",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },


        {
            name: "Michel",
            position: "Marketing Manager",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },


        {
            name: "Charlote",
            position: "CTO",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },


        {
            name: "Muller",
            position: "Partner",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },


        {
            name: "Abhinav",
            position: "CEO",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/752802/pexels-photo-752802.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            name: "John Doe",
            position: "Senior Developer",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/1752126/pexels-photo-1752126.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },

        {
            name: "Ben Stoke",
            position: "FullStack Developer",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img:"https://images.pexels.com/photos/1323650/pexels-photo-1323650.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
    ]

    const color = [
      "#46cd7f",
      "#c3643c",
      "#f3255a",
      "#8EB021",
      "#045782",
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

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        autoplay:true,
        rows:1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='container testimonial-section' id='testimonial'>
      <div className="section-title">
            <h5>Testimonial</h5>
            <span className="line"></span>
        </div>

        <div className='testimonial-slider'>

            <Slider {...settings}>
                {
                    data.map((item, index) =>(
                      <Zoom key={index}>
                       <div className='content-slider-main'>
                            <div className='content-slider' key={index} style={{backgroundColor:color[index]}}>
                            <img src={item.img} alt= "Testimonial images" className='center-image'/>
                            
                            <p className='name'>{item.name}</p>
                            <p className='position'>{item.position}</p>
                            <p className='description'>{item.des}</p>
                        </div>
                       </div>
                       </Zoom>
                        
                    ))
                }

            </Slider>
        </div>
    </div>
  )
}

export default Testimonial
