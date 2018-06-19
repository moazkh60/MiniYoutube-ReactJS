import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Constants
const API_KEY = 'AIzaSyDbJJz4nkKQv3CtQ7xT7UWpOG7FY_WD45E';

// Creating a component
class MyApp extends Component{

	// class constructor
	constructor(props){
		super(props);

		this.state = {videos: []};

		YTSearch({key: API_KEY, term: 'swift 4'}, (videos) => {
			this.setState({videos});
		});
	}

	// rendering JSX
	render(){
		return (
			<div>
				<SearchBar /> 
				<VideoDetail video = {this.state.videos[0]} />
				<VideoList videos = {this.state.videos} />
	 		</div>
		); 
	}
}

// Putting component generated HTML to DOM
ReactDOM.render(<MyApp />, document.querySelector('.container'));