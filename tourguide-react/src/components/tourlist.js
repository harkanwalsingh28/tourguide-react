import React, { Component } from 'react';

class TourList extends Component{
    constructor(props){
        super(props);
      this.state={tours:'jammu'};
    }
     
    render(){
const tours=['Srinagar','Manalli','Jaipur','Kerala'];
const touritems=tours.map((tour)=><li>{tour}</li>);
        return(
            <div>
                
                <ul>{touritems}</ul>
            </div>
        )
        
    }
}
export default TourList;