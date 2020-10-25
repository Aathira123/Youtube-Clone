import React from 'react';
import {Paper,Typography} from '@material-ui/core';

const VideoItem=({vid,onvideoselect})=>{
return(
    <div>
        <Paper onClick={()=>onvideoselect(vid)} style={{  display:'flex',cursor:'pointer',marginBottom:27}}>
            <img src={vid.snippet.thumbnails.medium.url} alt="thumbnail"/>
            <Paper elevation={10} style={{width:'15vw',display:'flex',paddingLeft:10, flexDirection:'column'}}>
       <Typography variant='subtitle1'>
         <b> {vid.snippet.title}</b>
       


       </Typography>
   
       <Typography variant="subtitle2" color="textSecondary">
           {vid.snippet.channelTitle}

       </Typography>
     
       </Paper>
        </Paper>
    </div>
)

}
export default VideoItem;