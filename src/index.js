import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDbJJz4nkKQv3CtQ7xT7UWpOG7FY_WD45E';

// Creating a component
const MyApp = () =>  {
	return <div> Starting MiniYoutube </div>;  
}

// Putting component generated HTML to DOM
ReactDOM.render(<MyApp />, document.querySelector('.container'))