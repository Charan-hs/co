import React from "react";

import {withStyles} from '@material-ui/core';

const style = {
    sidemenu:{
            display:'flex',
            flexDirection:'column',
            position:'fixed',
            left:'0',
            width:'20px',
            backgroundColor:'#726a95',
            height:'100%',
            boxShadow:" 10px 5px 10px #aaaaaa",
    }
}
  
 const SideMenu = (props) => {
     const {classes} = props;
    //  console.log(props)
    return( <div className={classes.sidemenu}>
        </div>  
    )
}

export default withStyles(style)(SideMenu);