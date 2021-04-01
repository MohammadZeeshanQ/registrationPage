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
        backgroundColor:'#ffffff',
        borderRadius:'1.5em',
        boxShadow:'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px',
    },
    divMotive:{
        padding:'3em 0',
        '@media (max-width:600px)':{
            padding:'2em 0 0 0',
        },
    },
    motiveText:{
        fontFamily:'Satisfy',
        textAlign:'center',
        '@media (max-width:600px)':{
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
        fontWeight:'Normal',
        '@media (max-width:600px)':{
            fontSize:'1.9em',
        }
    },
    divInput:{
        margin:'1.2em 0',
    },
    inputContent:{
        fontFamily:'Lexend', 
    },
    divBtn:{
        margin:'3em 0 .5em 0',
    },
    registerBtn:{
        fontFamily:'Lexend',
        backgroundColor:'#6a1b9a',
        color:'white',
        '&:hover':{
            transform: 'scale(1.1)',
            transition: '0.4s',
        },
    }, 
    transitionBtn:{
        fontFamily:'Lexend',
        textTransform:'none',
        color:'#a3a3c2'
    },
    socialContent:{
        textAlign:'center',
        padding:'1em 0 2em 0',
        '@media (max-width:600px)':{
            padding:'2em 0 3em 0',
        }
    },

});


export default function InfoBox() {

    const [checkFormRegister, setCheckFormRegister] = useState("Register");
    const classes = useStyles();


    useEffect(() => {
        changeFormType();
        console.log('Form Type: ', checkFormRegister);
    },[checkFormRegister]);


    const changeFormType = () => {
        if(checkFormRegister === "Login")
        {
            return(
                //  This will return the Login Form Content
                <div>

                    <form className={classes.formContent} noValidate autoComplete='off'>

                        <Typography className={classes.textContentHeading} variant='h4'>
                            Login
                        </Typography>

                        <div className={classes.divInput}>
                            <Input className={classes.inputContent} id='name-Input' placeholder="Username"/>
                        </div>
            
                        <div className={classes.divInput}>
                            <Input className={classes.inputContent} id='Password' placeholder='Password' type='password' />
                        </div> 

                        <div className={classes.divBtn}>
                            <Button className={classes.registerBtn} type='submit' variant='contained' >Sign In</Button>
                        </div>

                        <div>
                            <Button varaint='outlined' className={classes.transitionBtn} onClick={()=>setCheckFormRegister("Register")}>
                                New User?
                            </Button>
                        </div>

                    </form>

                  
                </div>
            )
        }
        else
        {
            return(
                //  This will return the Registration Form Content
                <div>
                    <div className={classes.divTextContent}>

                        <Typography className={classes.textContentHeading} variant='h4'> 
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
                            <Button className={classes.registerBtn} type='submit' variant='contained' >Register</Button>
                        </div>

                        <div>
                            <Button varaint='outlined' className={classes.transitionBtn} onClick={()=>setCheckFormRegister("Login")}>
                                Already have an account?
                            </Button>
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

                                    <Typography variant='h3' className={classes.motiveText}>
                                        Welcome to Kemo!
                                    </Typography>

                                </div>

                                <div className={classes.divImage}>
                                    <img src={PersonImage} alt='Person' className={classes.imagePerson}/>
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
                                            // Displaying Registration or Sign In based on the condition TRUE or FALSE
                                            //  True = 
                                            changeFormType()
                                        }
    
                                    </div>
                                 
                                </div>

                                <div className={classes.divSocialMedia}>

                                    <div className={classes.socialContent}>

                                        <FacebookIcon style={{fontSize:'2.2em', color:'blue', marginRight:'.1em'}} />
                                        <LinkedInIcon style={{fontSize:'2.2em', color:'darkblue', marginRight:'.1em'}} />
                                        <GTranslateIcon style={{fontSize:'2.2em', color:'darkorange', marginRight:'.1em'}} />
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
