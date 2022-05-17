import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
const Post = ()=>{
    const params = useParams()
   const [data, setData] = useState([]) 

   useEffect(()=>{
        const blogFetch = async ()=>{
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                if(response.status === 200){
                    setData(response.data)
                }
            } catch (error) {
                console.log(error)
                
            }
        }

    blogFetch()
   },[data])

    return(
        <div>
            <h1>This is about page </h1>
           {data.length > 0 ? data.map((item,pos)=>{
               return(
                   <div key={item.id} >
                       <small>Position:{pos}</small>
                       <h3>{item.title}</h3>
                       <p>{item.body}</p>
                   </div>
               )
           }):<button>Loading...</button>}

        </div>
    )
}

export default Post