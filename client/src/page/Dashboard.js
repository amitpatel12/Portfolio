import React, { useCallback, useContext } from 'react'
import { ThemeContext } from '../App'
import '../App.css'
import NavbarMobileView from '../components/Sidebar/NavbarMobileView'
import Sidebar from '../components/Sidebar/Sidebar'
import About from '../components/About/About'
import WorkExperience from '../components/WorkExperience/WorkExperience'
import TechStack from '../components/TechStack/TechStack'
import Education from '../components/Education/Education'
import Project from '../components/Projects/Project'
import Achievement from '../components/Achievement/Achievement'
import Training from '../components/Training/Training'
import Contact from '../components/Contact/Contact'

const Dashboard = () => {
    const { theme, changeTheme } = useContext(ThemeContext)
  return (
    <div id={theme}>
    <NavbarMobileView changeTheme={changeTheme} theme={theme}/>
    <Sidebar changeTheme={changeTheme} theme={theme}/>
    <About/>
    <WorkExperience/>
    <TechStack/>
    <Education/>
    <Project/>
    <Achievement/>
    {/* <Testimonial/> */}
    <Training/>
    <Contact/>
</div>
  )
}

export default Dashboard
