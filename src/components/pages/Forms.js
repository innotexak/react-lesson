import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import Edit from '@material-ui/icons/Edit'
import Save from '@material-ui/icons/Save'
import Delete from '@material-ui/icons/Delete'
import { Checkbox, Slider, Fab, TextField } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import {  FormControlLabel } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {green, purple} from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette:{
        primary:{
            main:purple[500],
        }
    }
    
})
const useStyles = makeStyles({
    root:{
        background:"orange",
        margin:"14px 0",
        fontSize:23
    }
})

function ButtonStyle(){
    const classes = useStyles()
    return(
        <Button className={classes.root}>
            Customized Button
        </Button>
    )
}
function CheckboxExample(){
    const [checked, setChecked] = useState(false)
    
    return( <>
        <FormControlLabel variant="contained"
            control={ <Checkbox 
                checked={checked}
                color="primary"
                onChange={(e)=>setChecked(e.target.checked)} 
                />}
            label="Testing Label"
        />
    </>) 
    
}

export const Forms= ()=>{
  
    return(
        <ThemeProvider theme={theme}>
            <div style={{margin:"5rem"}}>
                <ButtonStyle/>
                <TextField 
                    variant='filled'
                    placeholder='test@test.com'
                    type="number"
                    label="Time"
                    color="primary"
                
                />

                {/* Checkbox */}
            
                <CheckboxExample/>

                {/* Button group */}
                <ButtonGroup variant="contained" color="primary" >
                    <Button 
                        startIcon={<Save/>}
                        onClick={()=>alert("Button clicked")}
                    >
                        Save
                    </Button>
                    <Button 
                        variant="contained" 
                        startIcon={<Delete/>}
                    >
                        Delete
                    </Button>
                </ButtonGroup>  
            </div>
        </ThemeProvider>
    )
}