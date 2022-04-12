import React from 'react'
export default function ListItem({x}){
 return(<>
    {
        x.map((item)=>{
           return(
             <div className='box' key={item.id} >
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