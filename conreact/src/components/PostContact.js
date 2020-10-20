import { Table ,TableCell,TableContainer, TableHead, TableRow,Paper, withStyles, TableBody, IconButton, Button} from '@material-ui/core';
import React,{Fragment, useEffect,useState} from 'react';
import ChapterDetailsForm from './ChapterDetailsForm'
import {connect} from 'react-redux';
import * as actions from '../actions/postContact';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import PostContactForm from './PostContactForm';
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";
import { json } from 'body-parser';
const parseJson = require('parse-json');


const styles = theme => ({
    table:{
        margin:'16px 0'
    }
})


const PostContact = ({classes, ...props}) => {
    const [currentId,setCurrentId] = useState(0)
  
    const [chaterId,setChapterId] = useState(0)

    const chapterhandler = (id) => {
        setChapterId(id)
        console.log(id)
    }

    const onDelete = id => {
        const onSuccess = () => {
            ButterToast.raise({
                content: <Cinnamon.Crisp title="Done"
                    content="Deleted successfully"
                    scheme={Cinnamon.Crisp.SCHEME_PURPLE}
                    icon={<DeleteSweep />}
                />
            })
        }
        if (window.confirm('Are you sure to delete this record?'))
            props.deletePostContact(id,onSuccess)
    }
    

    useEffect(()=>{
        props.fetchAllPostContacts()
    },[])
    return (
    <Fragment>
       
        {/* <PostContactForm {...{currentId,setCurrentId}}/> */}
        <ChapterDetailsForm {...{chaterId,setChapterId}} />
        <TableContainer component={Paper} className={classes.table}>
            <Table arial-label='simple table' >
                <TableHead>
                    <TableRow>
                        <TableCell>
                               Chapter Name
                        </TableCell>
                        <TableCell align='right'>
                            City
                        </TableCell>
                        <TableCell align='right'>
                            Area
                        </TableCell>
                        <TableCell align='right'>
                            Meeting Day
                        </TableCell>
                        <TableCell align='right'>
                            Details
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    {
                    props.postContactList.map((contact,index) =>(
                        <TableRow key={index}>
                            <TableCell>
                                {contact.ChapterName}
                            </TableCell>
                            <TableCell align="right">
                                
                                {contact.City}
                            </TableCell>
                            <TableCell align="right">
                                {contact.Area}
                                {console.log(typeof(contact.ChapterDetails))}
                            </TableCell>
                            <TableCell align="right">
                                {contact.MeetDay}
                            </TableCell>
                            <TableCell align="right">
                                <Button variant="outlined" color="secondary"  size="small" 
                                onClick = {() => chapterhandler(contact._id)} >Know More</Button>
                           
                            </TableCell>
                            {/* <IconButton color='primary' onClick={() => setCurrentId(contact._id)}>
                                    <EditIcon  />
                                </IconButton>
                                <IconButton color='secondary' onClick={() => onDelete(contact._id)}>
                                    <DeleteOutlineIcon />
                                </IconButton> */}
                        </TableRow>
                    ))
                     
                    }
                </TableBody>

            </Table>

        </TableContainer>
        </Fragment>
    
    )
}
const mapStateToProps = state =>( {
     postContactList: state.postContact.list
})

const mapActionToProps = {
    fetchAllPostContacts :actions.fetchAll,
    deletePostContact: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostContact));