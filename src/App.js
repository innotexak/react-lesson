import React from 'react'
import About from './components/About';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { Landing } from './components/Landing';
import {Navbar }  from './components/Navbar';
import Service from './components/service';


class App extends React.Component{

  state = {
    number: 0,
    name:"John",
    message:""
}


handleDecrease=()=>{
 if(this.state.number > 0){
    this.setState({
        number: this.state.number - 1,
        message:""
    }) 
 }else{
   this.setState({
     message: `You can't go bello ${this.state.number}!` 
   })
 }
}
  
handleReset=()=>{     
    this.setState({
        number: 0,
        message:""
    }) 
}
  handleIncrease=()=>{     
  if(this.state.number < 20){
    this.setState({
      number: this.state.number + 1,
      message:""
  }) 
  }else{
    this.setState({
      message: `You can't go above ${this.state.number}!` 
    })
  }
}
  
 render(){
  return (<>
    <Navbar/>
    <Landing/>
      <div className='container'>
        <Service/>
        <About data="We are commited to rendering the best!"/>
        {/* <Contact/> */}
        <Footer state={this.state} handleDecrease={this.handleDecrease} handleIncrease={this.handleIncrease} handleReset={this.handleReset}/>
      </div>
 </>
)
 };
}

export default App;
