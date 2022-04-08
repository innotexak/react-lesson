import React from 'react'
export default function ListItem(props){
const {value} = props
console.log("value", value)
 return(<>
    {
        value.map((item, pos)=>{
           return(
             <div className='box' key={pos} >
             <h2 >{item.title}</h2>
             <p>
                 {item.content}
             </p>
             <span>{item.date}</span>
         </div>
           )
        })
  }
 </>)
 
}