import React, {useState, useEffect} from 'react'
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
        margin: '0 auto',
        '@media (max-width:600px)':{
            width:'80%'
        },
    },
    wrapper:{
        backgroundColor:'#fcfcfc',
        borderRadius:'1.5em',
    },
    divMotive:{
        padding:'3em 0',
        '@media (max-width:600px)':{
            padding:'2em 0 0 0',
        },
    },
    motiveText:{
        fontFamily:'Sans sarif, Montserrat',
        fontWeight:'800',
        textAlign:'center',
        '@media (max-width:600px)':{
            fontWeight:'700',
        }
    },
    divImage:{
        padding:'1em 0',
    },
    imagePerson:{
        width:'100%',
    },
    divForm:{
        textAlign: 'center',
        padding:'3em 0 1em 0',
        '@media (max-width:600px)':{
            padding:'1em 0 0 0',
        }
    },
    divTextContent:{
        '@media (max-width:600px)':{
            padding:'1em 0',
        }
    },
    textContentHeading:{
        fontFamily:'Sans sarif, Montserrat',
        fontWeight:'700',
        '@media (max-width:600px)':{
            fontSize:'1.9em',
        }
    },
    divInput:{
        margin:'1.2em 0',
    },
    divBtn:{
        margin:'2em 0',
    },
    registerBtn:{
        backgroundColor:'#6a1b9a',
        color:'white',
        '&:hover':{
            transform: 'scale(1.1)',
            transition: '0.4s',
        },
    }, 
    socialContent:{
        textAlign:'center',
        '@media (max-width:600px)':{
            padding:'2em 0',
        }
    },

});


export default function InfoBox() {

    const [checkFormRegister, setCheckFormRegister] = useState(true);
    const classes = useStyles();


    useEffect(() => {
        changeFormType();
        console.log('Form Type: ', checkFormRegister);
    },[checkFormRegister]);


    const changeFormType = () => {
        if(checkFormRegister === false)
        {
            return(
                <div>
                    Hello
                </div>
            )
        }
        else
        {
            return(
                <div>
                    <div className={classes.divTextContent}>
                        <Typography className={classes.textContentHeading} variant='h5'> 
                            Sign In
                        </Typography>
                    </div>

                    <form className={classes.formContent} noValidate autoComplete='off'>
                        <div className={classes.divInput}>
                            <Input className={classes.inputContent} id='name-Input' placeholder="Username"/>
                        </div>
                        <div className={classes.divInput}>
                            <Input className={classes.inputContent} id='email-Input' placeholder='Email' />   
                        </div>
                        <div className={classes.divInput}>
                            <Input className={classes.inputContent} id='Password' placeholder='Password' type='password' />
                        </div> 

                        <div className={classes.divBtn}>
                            <Button className={classes.registerBtn} variant='contained' >Register</Button>
                        </div>

                    </form>
                </div>
            )
        }
    }



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
                            <div className={classes.gridItemPicture}>

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
                            <div className={classes.gridItemText}>

                                

                                <div className={classes.divForm}>
        
                                    <div>
                                        {
                                            changeFormType()
                                        }
                                         <div className={classes.divBtn}>
                                            <Typography className='' variant='body1' onClick={()=> setCheckFormRegister(false)}>Sign In</Typography>
                                        </div>
                                    </div>
                                 
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
