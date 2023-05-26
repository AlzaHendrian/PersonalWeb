import Navbar from "./components/global/Navbar"
import Project from "./pages/Project"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
    <Navbar/>
    <Home id={1}/>
    <Project id={2}/>
    <Contact id={3}/>
    </>
  )
}

export default App
