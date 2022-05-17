import React from "react";

import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div>
         {/* <a href="/" >Home</a>
         <a href="/about" >About</a>
         <a href="/service" >Services</a> */}
        <Link to='/'>Home</Link>
        <Link to='/post'>About</Link>
        <Link to='/service'>Services</Link>

        </div>
    )
}

export default Navbar