import React from 'react';
import {Paper,Typography,TextField} from '@material-ui/core'

const VideoSuggest=({selectedVideo})=> {
    if(!selectedVideo) return <div></div>
   
    let videoSrc;
    {selectedVideo.id instanceof Object?videoSrc=`https://www.youtube.com/embed/${selectedVideo.id.videoId}`:videoSrc=`https://www.youtube.com/embed/${selectedVideo.id}`}
    
  
   
    return (
        <div>
            <div>
            <Paper elevation={6} style={{width:'100%'}}>
                <iframe src={videoSrc} frameBorder="10" height="400" width="100%" title="video player" />
                <Paper elevation={6} style={{padding:'15px'}}>
    <Typography variant="h6" style={{fontWeight:600}}>{selectedVideo.snippet.title}-{selectedVideo.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{selectedVideo.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{new Date(selectedVideo.snippet.publishedAt).toDateString()}</Typography>
                </Paper>
            </Paper>
            </div>
            <div style={{paddingTop:"40px"}}>
                <Typography variant="h6">Comments</Typography>
                <form  style={{paddingLeft:8}}>
                <TextField style={{width:'100%'}} InputProps={{ disableUnderline: true }} fullwidth label=" Write a comment"/>
            </form>
            </div>
        </div>

    )
}

export default VideoSuggest;