import React from 'react'
import About from './components/About';
import { Contact } from './components/Contact';
import { Landing } from './components/Landing';
import {Navbar }  from './components/Navbar';
import Service from './components/service';


const App = ()=>{

  
  return (<>
      <Navbar/>
      <Landing/>
        <div className='container'>
          <Service/>
          <About data="We are commited to rendering the best!"/>
          <Contact/>
        </div>
   </>
  );
}

export default App;
