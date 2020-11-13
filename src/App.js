import React, { useState,useEffect} from 'react'
import {Grid, Typography} from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoSuggest from './components/VideoSuggest';
import VideoList from './components/VideoList';
import red from "@material-ui/core/colors/red";
import YouTubeIcon from '@material-ui/icons/YouTube';
import HomePage from './components/HomePage';



function App() {
   const[videos,setVideo]= useState([]);

     const[selectedVideos,setSelectedVideo]=useState();
   const[homeVideos,setHomeVideos]=useState([]);
    
    const onvideoselect=(video)=>{
        
setSelectedVideo(video);
myfetch(video);
    }
   async function myfetch(video){
    const lists=await youtube.get('search',{params:{
        part:'snippet',
        maxResults:8,
        q:video.snippet.channelTitle,
        key:"AIzaSyCU-mEz6Sqg6Kgbg92qyU9XwUJPE_P8-pA",
       
        
        }});
       
        console.log(lists.data.items);
        setVideo(lists.data.items);
    }

    
  
useEffect(async() => {
    const response=await youtube.get('videos',{params:{
        part:'snippet',
        maxResults:20,
        chart:'mostPopular',
        regionCode:'US',
        key:"AIzaSyCU-mEz6Sqg6Kgbg92qyU9XwUJPE_P8-pA",
       
        
        }});
        
        
        setHomeVideos(response.data.items)
        
   
},[])
   const onFormSubmit=async (searchterm)=>{

       const response=await youtube.get('search',{params:{
        part:'snippet',
        maxResults:8,
        key:"AIzaSyCU-mEz6Sqg6Kgbg92qyU9XwUJPE_P8-pA",
        q:searchterm
        
        }});
        console.log(response)
        setVideo(response.data.items);
        
        setSelectedVideo(response.data.items[0]);
       
    
        
    }
    
        return (
            <Grid style={{justifyContent:"center"}} container spacing={11}>
                <Grid item xs={10}>
                    <Grid container spacing={10}>
                        
                    <Grid container spacing={10} style={{marginTop:30,display:'flex'}}>
                    
                       
                    <Grid item xs={2} style={{display:'flex'}}>

                        <YouTubeIcon style={{ width:60,height:55,color: red[500]}}/>
                        
                        <Typography variant='h5' style={{marginTop:15,fontWeight:'bold'}}>Youtube</Typography>
                       
                        </Grid>
                        <Grid item xs={7}>
<SearchBar onFormSubmit={onFormSubmit}/>



                    </Grid> </Grid>
                    
{!selectedVideos?

    <Grid item xs={12}>
<HomePage homevideos={homeVideos} onvideoselect={onvideoselect}/>
</Grid>
    :
   
<Grid item xs={7}>
<VideoSuggest selectedVideo={selectedVideos}/></Grid>
 }

<Grid item xs={5}>
<VideoList videos={videos} onvideoselect={onvideoselect}/> 
   </Grid>


                </Grid>

            </Grid>
            </Grid>
        )
    }


export default App;
