import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Save from '@material-ui/icons/Save'
import Delete from '@material-ui/icons/Delete'
import { Checkbox, Slider, Fab, TextField } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'



export const Forms= ()=>{

    const [checked, setChecked] = useState(false)
    console.log(checked)
    return(
        <div style={{margin:"5rem"}}>


        <Fab color="primary" aria-label="add">
        <Add />
        </Fab>
        <Fab color="primary" aria-label="add">
        <Edit />
        </Fab>

            <TextField 
                variant='filled'
                placeholder='test@test.com'
                type="number"
                label="Time"
                color="success"
            
            />

            {/* Checkbox */}
            <Checkbox 
            checked={checked}
            color="success"
            onChange={(e)=>setChecked(e.target.checked)} 
            />
        

        {/* Button group */}
          <ButtonGroup >
            <Button 
                variant="contained" 
                startIcon={<Save/>}
                onClick={()=>alert("Button clicked")}
            >Save</Button>
            <Button 
                variant="contained" 
                startIcon={<Delete/>}
                style={{background:"red", color:"white"}}
            >Delete</Button>
        </ButtonGroup>  
        </div>
    )
}