import React, { Component } from 'react';
import TourList from './tourlist';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={term:''};
    }
    handleChange(event){
        this.setState({term:event.target.value});
    }
    render() {
        
        
        return(
            <div>
                <input type="text" value={this.state.term}
                onChange={this.handleChange} />
                <button onClick={()=>this.touritems(this.state.term)} >Click!</button>
                </div>
        );
    }
}
export default SearchBar;