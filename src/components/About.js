import React, {Component} from "react";

class About extends Component{
// Here you can write your stateconst



    render(){

        // Here you can write any javascript 
        const {data}  = this.props


        return(
            <div className="about-container">
                <h2>About</h2>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis deleniti quo, in fugiat exercitationem illum ad eaque? Iure, hic provident ab id iste repellat illo quaerat quisquam autem! Animi laboriosam atque accusantium dignissimos aperiam quam autem asperiores distinctio ipsum ducimus quae amet sed, magni porro impedit veritatis iste. Maiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis deleniti quo, in fugiat exercitationem illum ad eaque? Iure, hic provident ab id iste repellat illo quaerat quisquam autem! Animi laboriosam atque accusantium dignissimos aperiam quam autem asperiores distinctio ipsum ducimus quae amet sed, magni porro impedit veritatis iste. Maiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores omnis deleniti quo, in fugiat exercitationem illum ad eaque? Iure, hic provident ab id iste repellat illo quaerat quisquam autem! Animi laboriosam atque accusantium dignissimos aperiam quam autem asperiores distinctio ipsum ducimus quae amet sed, magni porro impedit veritatis iste. Maiores.
                </p>
                <span>{data}</span>
            </div>
        )
    }
}

export default About