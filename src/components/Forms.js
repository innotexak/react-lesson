import React, {useState} from "react";

export const Form =()=>{
    const [form, setForm] = useState({
        name:"",
        sms:"",
        phone:''
    })

    const [show, setShow] = useState(false)


    const handleChange = (e)=>{
    const {name, value} = e.target
        setForm({
            ...form, [name]:value
        })
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        setShow(!show)
    
    }

    const handleBlur = ()=>{
        console.log("blured")
    }

    const handleFocus = ()=>{
        console.log("focused")
    }
    return(
    
        <div>

           {show &&  <div> 
            <p style={{padding:"20px", fontSize:"32px", textAlign:"center"}}>{form.name}</p>
            <p style={{padding:"20px", fontSize:"32px", textAlign:"center"}}>{form.gender}</p>
            <p style={{padding:"20px", fontSize:"32px", textAlign:"center"}}>{form.phone}</p>
           </div>
               
               }
            <form >
                <input
                type="text"
                value={form.name}
                placeholder="Name"
                name="name" 
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                
                />
        <br/>
                <select onChange={handleChange} name="gender" >
                    <option>Select your gender</option>
             
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"Others"}>Others</option>
                </select>
                <br/>
                <input
                value={form.phone}
                onChange={handleChange}
                type="number"
                name="phone"
                placeholder="Phone Number"
                />

                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}