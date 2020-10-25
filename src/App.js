import React, { useState} from 'react'
import {Grid, Typography} from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoSuggest from './components/VideoSuggest';
import VideoList from './components/VideoList';
import red from "@material-ui/core/colors/red";
import YouTubeIcon from '@material-ui/icons/YouTube';




function App() {
   const[videos,setVideo]= useState([]);

     const[selectedVideos,setSelectedVideo]=useState();
   
    
    const onvideoselect=(video)=>{
setSelectedVideo(video)
    }
  

   const onFormSubmit=async (searchterm)=>{

       const response=await youtube.get('search',{params:{
        part:'snippet',
        maxResults:8,
        key:"API_KEY",
        q:searchterm
        
        }});
        
        setVideo(response.data.items);
        setSelectedVideo(response.data.items[0]);
        console.log(videos);
    
        
    }
    
        return (
            <Grid style={{justifyContent:"center"}} container spacing={8}>
                <Grid item xs={11}>
                    <Grid container spacing={10}>
                        
                    <Grid container spacing={10} style={{marginTop:30,display:'flex'}}>
                    
                       
                    <Grid item xs={2} style={{display:'flex'}}>

                        <YouTubeIcon style={{ width:60,height:55,color: red[500]}}/>
                        
                        <Typography variant='h5' style={{marginTop:15,fontWeight:'bold'}}>Youtube</Typography>
                       
                        </Grid>
                        <Grid item xs={7}>
<SearchBar onFormSubmit={onFormSubmit}/>



                    </Grid> </Grid>
                    
<Grid item xs={7}>
<VideoSuggest selectedVideo={selectedVideos}/></Grid>
<Grid item xs={5}>
<VideoList videos={videos} onvideoselect={onvideoselect}/>
    
</Grid>

                </Grid>

            </Grid>
            </Grid>
        )
    }


export default App;
