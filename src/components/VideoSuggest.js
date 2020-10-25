import React from 'react';
import {Paper,Typography} from '@material-ui/core'

const VideoSuggest=({selectedVideo})=> {
    if(!selectedVideo) return <div></div>
    console.log(selectedVideo)
    const videoSrc=`https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return (
        <div>
            <Paper elevation={6} style={{width:'100%'}}>
                <iframe src={videoSrc} frameBorder="10" height="400" width="100%" title="video player"/>
                <Paper elevation={6} style={{padding:'15px'}}>
    <Typography variant="p">{selectedVideo.snippet.title}-{selectedVideo.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{selectedVideo.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{new Date(selectedVideo.snippet.publishedAt).toDateString()}</Typography>
                </Paper>
            </Paper>
        </div>
    )
}

export default VideoSuggest;