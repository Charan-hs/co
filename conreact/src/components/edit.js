import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },paperInput:{
    padding:'25px',
    margin:'20px',
    width:"400px"
}
}));

const Edit = () => {


    const validate = () => {
        let temp = {...errors}
        temp.name = values.name?"":"This Field is Required"
        temp.phone = values.phone?"":"This Field is Required"
        temp.email = values.email?"":"This Field is Required"
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x=="")
        
    }
    
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}  
      >     <Paper className={classes.paperInput}>
          <form autoComplete="off" noValidate
        onSubmit={submitHandler}
        >
            
            <Typography
            varient="h4" >
                Edit Contact
            </Typography>

            <TextField name="name"
            variant="outlined"
            label="Name"
            autoFocus
            className={classes.text}
            values={values.name}
            onChange={changeHandler}
            {...(errors.name && {error:true,helperText:errors.name})}
            fullWidth></TextField>

            <TextField name="phone"
            variant="outlined"
            label="Phone Number"
            className={classes.text}
            values={values.phone}
            onChange={changeHandler}
            {...(errors.phone && {error:true,helperText:errors.phone})}
            fullWidth></TextField>

            <TextField name="email"
            variant="outlined"
            label="Email"
            className={classes.text}
            values={values.email}
            onChange={changeHandler}
            {...(errors.email && {error:true,helperText:errors.email})}
            fullWidth></TextField>

            <TextField name="address"
            variant="outlined"
            label="Address"
            multiline
            rows={2}
            className={classes.text} 
            values={values.address}
            onChange={changeHandler}
            fullWidth></TextField>
            <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                <Button
            variant="contained" color="primary"
            type="submit"
            >Save</Button>
                </Grid>
            </Grid>
            
        </form>
        
          </Paper>
      </Modal>
    </div>
  );
}

export default Edit;