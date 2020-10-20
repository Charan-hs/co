import { Button, Grid, makeStyles, Modal, Paper, TextField,Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import useForm from './useForm';
import {connect} from 'react-redux';
import * as actions from '../actions/postContact';
import ButterToast, { Cinnamon } from "butter-toast";
import DoneIcon from '@material-ui/icons/Done';



const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paperInput:{
        padding:'25px',
        margin:'20px',
        width:"400px"
    },
    text:{
        margin:"10px 0"
    }
  }
  
  ));

const initialFieldValues={
    name:"",
    phone:"",
    email:"",
    address:""
}

const PostContactForm = (props) => {

   

    const classes = useStyles();

const validate = () => {
    let temp = {...errors}
    temp.name = values.name?"":"This Field is Required"
    temp.phone = values.phone?"":"This Field is Required"
    temp.email = values.email?"":"This Field is Required"
    setErrors({
        ...temp
    })
    return Object.values(temp).every(x => x==="")
    
}



    var {
        errors,
        setErrors,
        values,
        setValues,
        changeHandler,
        openIn,
        setOpenIn,
        resetForm,textin,settextin,btn,setbtn
    } = useForm(initialFieldValues,props.setCurrentId);

    useEffect(() => {
        if (props.currentId !== 0){
            setOpenIn(true)
            setValues({
                ...props.postContactList.find(x => x._id === props.currentId)
            })
            setErrors({})
            settextin("Update Contact")
            setbtn("Update")
            
        }
    }, [props.currentId])


    const submitHandler = e =>{
        
        e.preventDefault()
        const onSuccess = () => {
            ButterToast.raise({
                content:<Cinnamon.Crisp title={values.name}
                content="Successfully Saved"
                scheme = {Cinnamon.Crisp.SCHEME_PURPLE }
                icon={<DoneIcon />}
                />

            })
            resetForm()
          
            
            
        }
        if(validate()){
            if(props.currentId === 0){
            props.createPostContacts(values,onSuccess) 
            }   
            else{
                props.updatePostContact(props.currentId, values, onSuccess)
                
            }
        }
        
    }
     
    return (
        <div>
            <Modal
            open={openIn}
            onClose={() => resetForm()} 
            className={classes.modal}>
        <Paper className={classes.paperInput}>
        <form autoComplete="on" noValidate
        onSubmit={submitHandler}
        >
            
            <Typography
            varient="h4" >
                {textin}
            </Typography>

            <TextField name="name"
            variant="outlined"
            label="Name"
            autoFocus
            className={classes.text}
            value={values.name}
            onChange={changeHandler}
            {...(errors.name && {error:true,helperText:errors.name})}
            fullWidth></TextField>

            <TextField name="phone"
            variant="outlined"
            label="Phone Number"
            className={classes.text}
            value={values.phone}
            onChange={changeHandler}
            {...(errors.phone && {error:true,helperText:errors.phone})}
            fullWidth></TextField>

            <TextField name="email"
            variant="outlined"
            label="Email"
            className={classes.text}
            value={values.email}
            onChange={changeHandler}
            {...(errors.email && {error:true,helperText:errors.email})}
            fullWidth></TextField>

            <TextField name="address"
            variant="outlined"
            label="Address"
            multiline
            rows={2}
            className={classes.text} 
            value={values.address}
            onChange={changeHandler}
            fullWidth></TextField>
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                <Button
            variant="contained" color="primary"
            type="submit"
            >{btn}
            </Button>
                </Grid>
            </Grid>
            
        </form>
        </Paper>
        </Modal>
        
        <Paper elevation={0} style={{marginTop:"13px"}}>
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                <Button 
                variant="outlined"
                onClick={() => setOpenIn(true)}>

                ADD new Contact
            </Button>
                </Grid>
            </Grid>
           
        </Paper>
        </div>
    )
}

const mapStateToProps = state =>( {
    postContactList: state.postContact.list
})

const mapActionToProps = {
   createPostContacts :actions.create,
   updatePostContact: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(PostContactForm);