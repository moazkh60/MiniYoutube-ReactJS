import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDbJJz4nkKQv3CtQ7xT7UWpOG7FY_WD45E';

// Creating a component
const MyApp = () =>  {
	return (
		<div>
			<SearchBar /> 
	 	</div>
	);  
}

// Putting component generated HTML to DOM
ReactDOM.render(<MyApp />, document.querySelector('.container'));