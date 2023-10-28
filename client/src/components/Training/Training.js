import React from "react";
import "./training.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Training = () => {
  const data = [
    {
      name: "React js Training",
      position: "GeeksforGeeks",
      des: "I have completed a comprehensive course on Frontend development using ReactJS offered by GeeksforGeeks through their online platform.",
    },

    {
      name: "C++",
      position: "Udemy Classes",
      des: "I possess a thorough understanding of C++ language syntax, concepts, and principles, as well as the ability to apply them to solve practical programming problems.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png",
    },

    {
      name: "Javascript",
      position: "Udemy",
      des: "I have completed a JavaScript certification, and I can mention the topics covered in the curriculum, including data types, functions, control structures, object-oriented programming, and the Document Object Model (DOM).",
      img: "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },

    {
      name: "Project Management",
      position: "Microsoft",
      des: "The course covers key topics, including project team management, project management, project communication, and project leadership, providing participants with a comprehensive understanding of project management best practices.",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      name: "Git",
      position: "Programming Hub",
      des: "This course covers key topics such as creating and managing Git repositories, committing changes, branching and merging, resolving conflicts, and working with remote repositories",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },

    {
      name: "Bootstrap & JQuery",
      position: "Udemy",
      des: "I have undergone comprehensive online training on Bootstrap and JQuery, which provided in-depth instruction on both technologies",
      img: "https://images.pexels.com/photos/752802/pexels-photo-752802.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

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
    "#AF0C16",
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Training & Certification</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom key={index}>
              <div className="content-slider-main">
                <div
                  className="content-slider"
                  key={index}
                  style={{ backgroundColor: color[index] }}
                >
                  <p className="name">{item.name}</p>
                  <p className="position">{item.position}</p>
                  <p className="description">{item.des}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Training;
