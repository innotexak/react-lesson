import React from 'react'
import { Landing } from './components/Landing';
import {Navbar }  from './components/Navbar';
import Service from './components/service';


const App = ()=>{
  const data = [
    {
        title:"How to be bold in public", 
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium voluptatum eius aperiam tempora cumque sint veniam maxime quisquam voluptatibus qui tenetur iure quod id animi veritatis quidem deleniti in fugit, repudiandae blanditiis sit eum dignissimos quis. Earum magni similique voluptates neque autem eaque id iusto facilis, architecto temporibus voluptatibus inventore ipsa cupiditate aut excepturi accusantium est aspernatur, praesentium explicabo. Dolor saepe blanditiis totam soluta laudantium voluptatibus, inventore delectus voluptate quae sapiente facilis rem eos perferendis alias quod quos eum vero in animi autem incidunt natus sint quasi sit? Hic velit modi voluptatem molestias, praesentium ipsam rem sit excepturi quas dolor quibusdam commodi ratione amet quis veniam. Sapiente quas assumenda impedit dolore vel sequi perferendis cumque ullam hic quis quod perspiciatis quae veniam, explicabo non magnam, dignissimos voluptas fugiat excepturi ratione beatae accusantium suscipit quisquam repellendus. Iure at fugit consequuntur libero excepturi necessitatibus corrupti ab repellendus quidem ipsa ea, fuga iusto? Dolore facilis fugit fugiat assumenda optio suscipit ex adipisci voluptas? Ea error ducimus earum officia sequi, magni eos, ab vitae, reprehenderit sit necessitatibus nemo est ipsam voluptatem repellendus. Rem quibusdam repellendus distinctio sit nulla, non vel at quas recusandae assumenda nobis excepturi animi a odio reprehenderit ab accusantium nemo.",
        date : new Date().getFullYear() +":" + new Date().getMonth() + ":" + new Date().getDay()
    },
  
    {
        title:"How to be bold in public", 
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium voluptatum eius aperiam tempora cumque sint veniam maxime quisquam voluptatibus qui tenetur iure quod id animi veritatis quidem deleniti in fugit, repudiandae blanditiis sit eum dignissimos quis. Earum magni similique voluptates neque autem eaque id iusto facilis, architecto temporibus voluptatibus inventore ipsa cupiditate aut excepturi accusantium est aspernatur, praesentium explicabo. Dolor saepe blanditiis totam soluta laudantium voluptatibus, inventore delectus voluptate quae sapiente facilis rem eos perferendis alias quod quos eum vero in animi autem incidunt natus sint quasi sit? Hic velit modi voluptatem molestias, praesentium ipsam rem sit excepturi quas dolor quibusdam commodi ratione amet quis veniam. Sapiente quas assumenda impedit dolore vel sequi perferendis cumque ullam hic quis quod perspiciatis quae veniam, explicabo non magnam, dignissimos voluptas fugiat excepturi ratione beatae accusantium suscipit quisquam repellendus. Iure at fugit consequuntur libero excepturi necessitatibus corrupti ab repellendus quidem ipsa ea, fuga iusto? Dolore facilis fugit fugiat assumenda optio suscipit ex adipisci voluptas? Ea error ducimus earum officia sequi, magni eos, ab vitae, reprehenderit sit necessitatibus nemo est ipsam voluptatem repellendus. Rem quibusdam repellendus distinctio sit nulla, non vel at quas recusandae assumenda nobis excepturi animi a odio reprehenderit ab accusantium nemo.",
        date : new Date().getFullYear() +":" + new Date().getMonth() + ":" + new Date().getDay()
    },
  
    {
        title:"How to be bold in public", 
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium voluptatum eius aperiam tempora cumque sint veniam maxime quisquam voluptatibus qui tenetur iure quod id animi veritatis quidem deleniti in fugit, repudiandae blanditiis sit eum dignissimos quis. Earum magni similique voluptates neque autem eaque id iusto facilis, architecto temporibus voluptatibus inventore ipsa cupiditate aut excepturi accusantium est aspernatur, praesentium explicabo. Dolor saepe blanditiis totam soluta laudantium voluptatibus, inventore delectus voluptate quae sapiente facilis rem eos perferendis alias quod quos eum vero in animi autem incidunt natus sint quasi sit? Hic velit modi voluptatem molestias, praesentium ipsam rem sit excepturi quas dolor quibusdam commodi ratione amet quis veniam. Sapiente quas assumenda impedit dolore vel sequi perferendis cumque ullam hic quis quod perspiciatis quae veniam, explicabo non magnam, dignissimos voluptas fugiat excepturi ratione beatae accusantium suscipit quisquam repellendus. Iure at fugit consequuntur libero excepturi necessitatibus corrupti ab repellendus quidem ipsa ea, fuga iusto? Dolore facilis fugit fugiat assumenda optio suscipit ex adipisci voluptas? Ea error ducimus earum officia sequi, magni eos, ab vitae, reprehenderit sit necessitatibus nemo est ipsam voluptatem repellendus. Rem quibusdam repellendus distinctio sit nulla, non vel at quas recusandae assumenda nobis excepturi animi a odio reprehenderit ab accusantium nemo.",
        date : new Date().getFullYear() +":" + new Date().getMonth() + ":" + new Date().getDay()
    }
  ]
  
  return (<>
      <Navbar/>
      <Landing/>
        <div className='container'>
          <Service data={data}/>
        </div>
   </>
  );
}

export default App;
