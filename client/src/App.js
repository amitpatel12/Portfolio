import React, {useState, createContext} from 'react'
import './App.css'
import Dashboard from './page/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Project from './page/Project'
// import { scrollToTop } from 'react-scroll-to-top'


export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState("light")

  const changeTheme = () =>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
   
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/projects' element={<Project/>}/>
     </Routes>
    
    </ThemeContext.Provider>
  )
}

export default App
