import React,{useState} from 'react'
import About from './components/About';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { Form } from './components/Forms';
import { Landing } from './components/Landing';
import {Navbar }  from './components/Navbar';
import Service from './components/service';


const App = ()=>{

const [data, setData] = useState({name:"John", message:"Welcome boss", number:10000})



const [show, setShow] = useState(true)










const handleDecrease=()=>{
 if(data.number > 0){
    setData({
        number: data.number - 1,
        message:""
    }) 
 }else{
   setData({
     message: `You can't go bello ${data.number}!` 
   })
 }
}
  
const handleReset=()=>{     
    setData({
        number: 0,
        message:""
    }) 
}
  const handleIncrease=()=>{     
  if(data.number < 20){
    setData({
      number:data.number + 1,
      message:""
  }) 
  }else{
    setData({
      message: `You can't go above ${data.number}!` 
    })
  }
}
  
  
  return (<>
    <Navbar/>
    <Landing/>
    <Form/>
      {/* <div className='container'>
        <Service/>
        <About data="We are commited to rendering the best!"/>
 
      {
        show &&
        <Footer state={data} handleDecrease={handleDecrease} handleIncrease={handleIncrease} handleReset={handleReset}/>
        
      }
        
        <button onClick={()=>setShow(!show)}>{show?"Close":"Open"}</button>
      </div> */}
 </>
)
 };


export default App;
