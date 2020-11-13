import React,{Component} from 'react';
import {Paper,TextField} from '@material-ui/core';
import axios from 'axios';


class SearchBar extends Component{
    state={
        searchTerm:"",
        suggestions:[],
    }
    
    handleChange=(event)=>{
      this.setState({
          searchTerm:event.target.value,
      
      })  
     
     
       
  
  
    }
  
    handleSubmit=(event)=>{
        const {searchTerm}= this.state;
        const {onFormSubmit}=this.props;
        
        onFormSubmit(searchTerm);
        event.preventDefault()
    }
   
render(){
    
    return(
        <div>
        <Paper elevation={8} style={{paddingBottom:'3px'}}>
            <form onSubmit={this.handleSubmit} style={{paddingLeft:8}}>
                
            <TextField   InputProps={{ disableUnderline: true }} placeholder="Search..." onChange={this.handleChange} style={{paddingTop:10}} di/>
            </form>
            
    
        </Paper>
      
       </div>        
    )
}

}
export default SearchBar;