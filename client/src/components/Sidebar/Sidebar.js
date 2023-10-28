import Home from '../Home/Home'
import './Sidebar.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from 'react';
import SidebarList from './SidebarList';

const Sidebar = ({theme, changeTheme}) => {

  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleExpandSidebar = () =>{

    setExpandSidebar(!expandSidebar);
  }




  return (
    <div className='container-fluid sidebar-section'>
        
        <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"} >
            <div className='icon-for-sidebar-expand-and-collapse'>

              
                <p onClick={handleExpandSidebar}> {
                expandSidebar ? 
                (<BsChevronLeft size={30}/>) 
                : 
                (<BsChevronRight size={30}/> )
              } </p>
            </div>
            <SidebarList expandSidebar={expandSidebar}/>
        </div>

        <div className='container'>
            <Home changeTheme={changeTheme} theme={theme}/>
        </div>
    </div>
    
  )
}

export default Sidebar
