import React from "react";
import {Routes, Route} from 'react-router-dom'

// importing apges 
import Post from "./components/pages/About";
import Service from "./components/pages/Service";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";
import Navbar from "./components/pages/Navbar";
import Footer from "./components/pages/Footer";
import { Forms } from "./components/pages/Forms";


const App = ()=>{
  
  return (
  <>
  {/* Universal route */}
  <Navbar/>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/post/:id" element={<Post/>}/>
    <Route exact path="/service" element={<Service/>}/>
    <Route exact path="/forms" element={<Forms/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>

  {/* Universal route */}
  <Footer/>
  </>
  )

 };


export default App;
