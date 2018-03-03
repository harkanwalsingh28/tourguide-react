import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import TourList from './components/tourlist';
import Header from './components/header';

import SearchBar from './components/search-bar';


class App extends Component{
    constructor(props){
        super(props);
        
    }

render() {
    return(
        <div> 
        <Header />
        <SearchBar />
       <TourList />
        </div>
    );
}
}
ReactDOM.render(<App />, document.getElementById('root'));

