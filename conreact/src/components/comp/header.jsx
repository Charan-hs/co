import { AppBar, Grid, IconButton, Toolbar, makeStyles } from '@material-ui/core';
import React, { Fragment } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
    root:{
        backgroundColor:'#fff'
    }
})


export default function Header(){
    const classes = useStyles();
    return (
        <Fragment>
            <AppBar position='sticky' className={classes.root}>
                <Toolbar>
                    <Grid container>
                        <Grid item >
                            <Grid container>
                                <Grid item>
                                <PeopleIcon style={{color:'#686d76',margin:'15px 10px 0 0'}} fontSize='large'/>
                                </Grid>
                                <Grid item>
                                <h3 style={{color:'#8675a9'}}>   
                                Contacts
                            </h3>       
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                        <Grid item style={{paddingTop:'8px'}}>
                            <IconButton >
                                <Badge badgeContent={8} color="secondary" >
                                    <NotificationsIcon  />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={7} color="secondary" >
                                    <ChatIcon  />
                                </Badge>
                            </IconButton>

                        </Grid>

                    </Grid>

                </Toolbar>
            </AppBar>
        </Fragment>

    )
}