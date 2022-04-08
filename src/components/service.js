import React from 'react'
import {data} from '../components/data'
import ListItem from './ListItem'
export default function Service(){
    // data.map(item=>{return()})

    return(
        <div className='service-container'>
          <ListItem value={data}/>
        </div>
    )
}



// const  Service = ()=>{
//     return(
//         <>
//         </>
//     )
// }

// export default Service