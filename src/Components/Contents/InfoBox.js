import React, {useState} from 'react'
import {makeStyles, Grid, Button, Typography, Input} from '@material-ui/core';

//Importing Picture from assets folder
import PersonImage from '../Assets/Images/undraw_Nature.png';

//Importing logo from material UI
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({

    root:{
        width:'60%',
        margin: '0 auto'
    },
    wrapper:{
        backgroundColor:'#fcfcfc',
        borderRadius:'1.5em',
        border:'1px red solid',
    },
    divMotive:{
        padding:'3em 0',
    },
    motiveText:{
        fontFamily:'Sans sarif, Montserrat',
        fontWeight:'800',
        textAlign:'center',
    },
    divImage:{
        padding:'1em 0',
    },
    imagePerson:{
        width:'100%',
    }

});


export default function InfoBox() {

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className={classes.wrapper}>

                <div className={classes.boxDiv}>

                    <Grid
                        container
                        sm='12'
                        md='12'
                        justify='center'
                    >

                        <Grid 
                            item
                            xs='9'
                            md='6'
                        >
                            <div className={classes.gridItem}>

                                <div className={classes.divMotive}>

                                    <Typography variant='h4' className={classes.motiveText}>
                                        Welcome to Kemo!
                                    </Typography>

                                </div>

                                <div className={classes.divImage}>

                                    <img src={PersonImage} alt='Person Image' className={classes.imagePerson}/>

                                </div>

                            </div>

                        </Grid>

                        <Grid 
                            item
                            xs='9'
                            md='6'
                        >
                            <div className={classes.gridItem}>

                                <div className={classes.divForm}>
                                    <form className={classes.formContent} noValidate autoComplete='off'>
                                        <div>
                                            <Input className={classes.inputContent} id='name-Input' placeholder="Username"/>
                                        </div>
                                        <div>
                                            <Input className={classes.inputContent} id='email-Input' placeholder='Email' />   
                                        </div>
                                        <div>
                                            <Input className={classes.inputContent} id='Password' placeholder='Password' type='password' />
                                        </div> 

                                        <div>
                                            <Button className={classes.registerBtn} variant='contained' >Register</Button>
                                        </div>

                                    </form>

                                </div>

                                <div className={classes.divSocialMedia}>

                                    <div className={classes.socialContent}>

                                        <FacebookIcon style={{fontSize:'2.5em', color:'blue',}} />
                                        <LinkedInIcon style={{fontSize:'2.5em', color:'darkblue'}} />
                                        <GTranslateIcon style={{fontSize:'2.5em', color:'darkorange'}} />
                                    </div>

                                </div>

                            </div>

                        </Grid>

                    </Grid>

                </div>

            </div>
            
        </div>
    )
}
