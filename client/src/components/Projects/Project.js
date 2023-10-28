import ProjectList from "./ProjectList";

const Project = () => {
  const data = [
    {
      name: "Reminder APP",
      des: "TThis reminder app are building aims to help users set reminders for important tasks or events, and get notified when the time comes. One unique aspect of your app is that it leverages WhatsApp to send notifications to users when their reminders are due. it also allows users to add a title and description to their reminders, which can help them better identify the task or event associated with each reminder.",
      projectlink: "https://reminder-whatsapp.netlify.app/",
      github:'https://github.com/amitpatel12/Reminder-App',
      techused: [
        {
          techname: "REACT JS",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
        {
          techname: "NODEJS",
        },
        {
          techname: "EXPRESS JS",
        },
        {
          techname: "MONGODB",
        },
      ],
    },
    {
      name: "Software Piracy Protection System",
      des: "Our team's final year project aims to prevent software piracy through the use of Mac address authentication to verify users after they enter the product key. We have created two websites to support this goal: one for purchasing software and another for connecting it. All prototypes were developed using the Mern stack.",
      projectlink: "https://major-project-2023.netlify.app/",
      github:'https://github.com/amitpatel12/Major-Project-Website',
      techused: [
        {
          techname: "REACT JS",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
        {
          techname: "NODEJS",
        },
        {
          techname: "EXPRESS JS",
        },
        {
          techname: "MONGODB",
        },
      ],
    },
    ,{
      name: "URL Shortener",
      des: "The URL Shortener and Analytics Platform is a versatile web application designed to simplify long and cumbersome URLs into short, easy-to-share links. Additionally, the platform offers robust analytics capabilities to track the performance of these shortened URLs, providing insights into click activity, timestamps, and creation details.",
      projectlink: "https://sturl0.onrender.com/",
      github:'https://github.com/amitpatel12/URL-Shorter',
      techused: [
        {
          techname: "REACT JS",
        },
        {
          techname: "Tailwind CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
        {
          techname: "NODEJS",
        },
        {
          techname: "EXPRESS JS",
        },
        {
          techname: "MONGODB",
        },
      ],
    },
    {
      name: "KeepMe APP",
      des: "This is a simple MERN Application. Here anyone can Create your account and then login and Store you Important notes with a tag that are list in the select section. and also filter the notes with tag it also has dark mode option.",
      projectlink: "https://keepme12.netlify.app/",
      github:'https://github.com/amitpatel12/KeepMe',
      techused: [
        {
          techname: "REACT JS",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
        {
          techname: "NODEJS",
        },
        {
          techname: "EXPRESS JS",
        },
        {
          techname: "MONGODB",
        },
      ],
    },

    {
      name: "Weather App",
      des: "Designed a weather report system to get the current weather of particular cities using GeoDBCities API and OpenWeather API for future predictions.",
      projectlink: "https://weather-app-using-react-app.netlify.app/",
      github:'https://github.com/amitpatel12/Weather-app',
      techused: [
        {
          techname: "CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
        {
          techname: "REACT JS",
        },
        {
          techname: "RAPID API",
        },
      ],
    },

    {
      name: "Movie Website",
      des: "It is like IMDB website here all movie with there rating. for this i am using  themoviedb api. and alos has categories like popular movies, upcoming movies and top rated movies",
      projectlink: "https://moviedetailsimdbamit.netlify.app/",
      github:'https://github.com/amitpatel12/IMDB-Movie',
      techused: [
        {
          techname: "REACT JS",
        },
        {
          techname: "CSS",
        },
        {
          techname: "API",
        },
      ],
    },

    {
      name: "E-commerce Website",
      des: "It is a E-commerece Website UI design. this project done using reactjs and material ui for css, it has different pages like home, register, login, cart etc.",
      projectlink: "https://extraordinary-crostata-38d0a7.netlify.app/",
      github:'https://github.com/amitpatel12/E-commerce-App',
      techused: [
        {
          techname: "REACT JS",
        },
        {
          techname: "CSS",
        },
        {
          techname: "MATERIAL UI",
        },
      ],
    },


    // {
    //   name: "E-commerce Product Management",
    //   des: "It is a blog Website UI design. it has Various features A Project Description is a document that outlines the details of a specific project in a structured format covering all stages of the project and the processes involved in it.  A Project Description is drafted quite early in the Project Life Cycle. It is a useful document that could be referred to for a quick understanding of what the project involves, what it aims to accomplish.",
    //   projectlink: "https://sensational-marshmallow-7d1344.netlify.app/",
    //   github:'https://github.com/amitpatel12/Mern-Product-managemnt',
    //   techused: [
    //     {
    //       techname: "HTML5",
    //     },
    //     {
    //       techname: "CSS",
    //     },
    //     {
    //       techname: "JAVASCRIPT",
    //     },
    //     {
    //       techname: "JAVASCRIPT",
    //     },
    //   ],
    // },

    {
      name: "Snake Game",
      des: "it is a simple snake game using javascript.",
      projectlink: "https://iridescent-puppy-c93e48.netlify.app/",
      github:'https://github.com/amitpatel12/Web-Project-New',
      techused: [
        {
          techname: "HTML5",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
        
      ],
    },

    


    {
      name: "Jump Game Website",
      des: "it also a simple jump game using javascript.",
      projectlink: "https://dainty-squirrel-688098.netlify.app/",
      github:"https://github.com/amitpatel12/Web-Project-New/tree/master/jump%20game",
      techused: [
        {
          techname: "HTML5",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JAVASCRIPT",
        },
      ],
    },
  ];
  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList item={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
