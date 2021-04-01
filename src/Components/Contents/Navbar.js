import React from 'react'
import {makeStyles, AppBar, Toolbar, IconButton} from '@material-ui/core';
import PinterestIcon from '@material-ui/icons/Pinterest';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    appBar:{ 
        height: 60,
        backgroundColor: '#6a1b9a',
    },
    toolBar:{

    },
    logoBtn:{
        margin:'1em 0',
    },
}));

export default function Navbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <IconButton size='small' className={classes.logoBtn}>
                        <PinterestIcon style={{fontSize: '2em', color:'#FFFFFF',}} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}
