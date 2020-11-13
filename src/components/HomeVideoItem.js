import React from 'react';
import {Paper,Typography,Grid} from '@material-ui/core';

const HomeVideoItem=({vid,onvideoselect})=>{
return(
    <Grid item xs={4}>
        <Paper onClick={()=>onvideoselect(vid)} style={{ width:'80%',height:'90%', display:'flex',flexDirection:'column' ,cursor:'pointer',marginBottom:27,marginLeft:10}}>
            <img src={vid.snippet.thumbnails.medium.url} alt="thumbnail"/>
            <Paper elevation={10} style={{height:'45%',display:'flex',paddingLeft:10, flexDirection:'column'}}>
       <Typography variant='subtitle2'>
         <b> {vid.snippet.title}</b>
       


       </Typography>
   
       <Typography variant="subtitle2" color="textSecondary">
           {vid.snippet.channelTitle}

       </Typography>
     
       </Paper>
        </Paper>
        </Grid>
)

}
export default HomeVideoItem;