import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem';
const VideoList=({videos,onvideoselect})=>{
    const listofVideos=videos.map((vid,id)=><VideoItem onvideoselect={onvideoselect} key={id} vid={vid}/>)
    return (
        <Grid container spacing={11}>
    {listofVideos} 
    </Grid>
    )

}
export default VideoList;