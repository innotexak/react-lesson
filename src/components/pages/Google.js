import React, {useState} from 'react'
import { AppBar, Avatar, Badge, Button, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MicIcon from '@mui/icons-material/Mic';
import {  Edit, Search } from "@material-ui/icons";


const useStyles = makeStyles((theme)=>({
    others:{
        width:"100%",
      height:"70vh",
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        flexDirection:"column",
        marginTop:theme.spacing(4),
        backgroundColor:"white",
        color:"black"
        
    }, 
    logoCont:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    
    googleLogo:{
        width:"250px",
        height:"150px"
    },
    inputCont:{
        width:"600px",
        height:"40px",
        display:"flex",
        border:"1px solid #ececec",
        borderRadius:"20px",
        '&:hover': {
            boxShadow:"4px 2px 3px 2px #ececec",
            },

        [theme.breakpoints.down('sm')]:{
            width:"300px",
        }
    },

    input:{
        width:"580px",

        [theme.breakpoints.down("sm")]:{
            width:"280px",
        }
    },

    search:{
        marginTop:theme.spacing(1),
        paddingLeft:theme.spacing(1)
    },
    
    mic:{
        marginTop:theme.spacing(1),
        paddingRight:theme.spacing(1)
    },

    btn:{
        color:theme.palette.primary.light,
        borderRadius:"20px",
        width:"250px",
        padding:theme.spacing(1),
        position:"fixed",
        bottom:"30px",
        fontSize:"14px",
        right:'30px',
        boxShadow:"4px 2px 3px 2px #ececec",

    }
}))

export default function Google(){
    const classes = useStyles()
    return(
        < >
            <div className={classes.others} >
               <div variant="h2" className={classes.logoCont}>
                   <img  alt="google image"
                   src="https://i0.wp.com/leadership.ng/wp-content/uploads/2021/10/google2.0.0.jpg"
                   className={classes.googleLogo}
                   />
               </div>
               <div className={classes.inputCont}>
                   <Search className={classes.search}/>
                   <InputBase placeholder='Search google or type a url' className={classes.input}/>
                   <MicIcon className={classes.mic}/>
               </div>
               
            </div>
            <div style={{width:"100%"}}>
            <Button className={classes.btn} startIcon={<Edit/>}>
                Customize Chrome
            </Button>
            </div>

          
            
        </>
    )
}