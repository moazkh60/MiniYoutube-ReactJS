import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// Constants
const API_KEY = 'AIzaSyDbJJz4nkKQv3CtQ7xT7UWpOG7FY_WD45E';

// Creating a component
class MyApp extends Component{

	// class constructor
	constructor(props){
		super(props);

		this.state = {videos: []};

		YTSearch({key: API_KEY, term: 'testing'}, (videos) => {
			this.setState({videos});
		});
	}

	// rendering JSX
	render(){
		return (
		<div>
			<SearchBar /> 
	 	</div>
		); 
	}
}

// Putting component generated HTML to DOM
ReactDOM.render(<MyApp />, document.querySelector('.container'));