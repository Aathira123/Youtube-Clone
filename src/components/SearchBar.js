import React,{Component} from 'react';
import {Paper,TextField} from '@material-ui/core';
class SearchBar extends Component{
    state={
        searchTerm:""
    }
    handleChange=(event)=>{
      this.setState({
          searchTerm:event.target.value
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
        <Paper elevation={8} style={{paddingBottom:'3px'}}>
            <form onSubmit={this.handleSubmit} style={{paddingLeft:8}}>
                <TextField style={{width:'100%'}} InputProps={{ disableUnderline: true }} fullwidth label="  Search..." onChange={this.handleChange}/>
            </form>
        </Paper>
    )
}

}
export default SearchBar;