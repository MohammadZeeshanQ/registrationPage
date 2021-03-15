import React from 'react'
import { makeStyles } from '@material-ui/core';

//importing Register box modules
import RegisterBox from './InfoBox.js';


const useStyles = makeStyles((theme) => ({
    root: {
        width:'100vw',
        backgroundColor:'#eeeeee',
    },
    wrapper:{
        padding: '6em 0',
        '@media (max-width:600px)':{
            padding:'1em 0',
        }
    }
  }));

export default function Background() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.wrapper}>

                <RegisterBox/>

            </div>
            
        </div>
    )
}
