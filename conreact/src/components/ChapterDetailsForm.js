import { Table ,TableCell,TableContainer, TableHead, TableRow, TableBody, makeStyles, Modal, Paper,} from '@material-ui/core';
import React, { useEffect,useState } from 'react';
import {connect} from 'react-redux';



const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        overflow: 'auto',
        marginTop:'4%',
        marginBottom:'0.75%',
      },
    paperInput:{
        padding:'25px',
        margin:'20px',
        width:"90%"
    },
    text:{
        margin:"10px 0"
    }
  }
  
  ));
//   chaterId,setChapterId,setChapterOpen,chaterOpen

const ChapterDetailsForm = (props) => {
    const [chaterOp,setChapterOp] = useState(false)
    const inivalue = {
        "Names":[],
        "Company":[],
        "Profession":[],
        'Mobile Number':[],
        'Meeting Name':'',
        'Metting date and Time':"",
        'Venue':"",
        'Mobile':"",
        'Address':[],

    }
    const [value,setvalue] = useState(inivalue)
    const classes = useStyles({});
    useEffect(() => {
        if (props.chaterId !== 0){
            setChapterOp(true)
            var y = props.postContactList.find(x => x._id === props.chaterId)['ChapterDetails']
            setvalue(
                y
            )
            console.log(value)
            // console.log(props)
            
        }
    }, [props.chaterId])


    return (
        
            <Modal
            open={chaterOp}
            onClose={() => {
                setChapterOp(false)
                props.setChapterId(0)
                setvalue(inivalue)
            }} 
            className={classes.modal}>
        <Paper className={classes.paperInput}>
            <h2>
            {value['Meeting Name']}
            </h2>
            <p>
            {value['Metting date and Time']}
            </p>
            <p>
            {value['Venue']}
            </p>
            <p>
            {value['Mobile']}
            </p>
            <p>
            {value['Address']}
            </p>
            <TableContainer component={Paper} className={classes.table}>
            <Table arial-label='simple table' >
                <TableHead>
                    <TableRow>
                        <TableCell>
                               Member Name
                        </TableCell>
                        <TableCell align='right'>
                            Company
                        </TableCell>
                        <TableCell align='right'>
                           Profession
                        </TableCell>
                        <TableCell align='right'>
                            Mobile Number
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {value['Names'].map((name,index) => (
                            <TableRow > 
                            <TableCell>
                                {name}
                            </TableCell>
                            <TableCell align='right'>
                                {value['Company'][index]}
                            </TableCell>
                            <TableCell align='right'>
                                {value['Profession'][index]}
                            </TableCell>
                            <TableCell align='right'>
                                {value['Mobile Number'][index+(value['Mobile Number'].length-value['Company'].length)]}
                            </TableCell>

                            </TableRow>
                        ))
                    }
                    
                   
                </TableBody>

            </Table>

        </TableContainer>
           
        </Paper>
        </Modal>        
    )
}
const mapStateToProps = state =>( {
    postContactList: state.postContact.list
})



export default connect(mapStateToProps)(ChapterDetailsForm);

