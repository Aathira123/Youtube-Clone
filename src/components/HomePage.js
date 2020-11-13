import { Grid } from '@material-ui/core'
import React from 'react'
import HomeVideoItem from './HomeVideoItem';


function HomePage({homevideos,onvideoselect}) {
    
        const listofVideos=homevideos.map((vid,id)=><HomeVideoItem onvideoselect={onvideoselect} key={id} vid={vid}/>)
        return (
            <Grid container spacing={12}>
        {listofVideos} 
        </Grid>
        )

           
    
        
    
}

export default HomePage
