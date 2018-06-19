import _ from 'lodash';
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

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('Swift 4');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	// rendering JSX
	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} /> 
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos} />
	 		</div>
		); 
	}
}

// Putting component generated HTML to DOM
ReactDOM.render(<MyApp />, document.querySelector('.container'));