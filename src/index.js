import React from 'react';
import ReactDOM from 'react-dom';

// Creating a component
const MyApp = () =>  {
	return <div> Starting MiniYoutube </div>;  
}

// Putting component generated HTML to DOM
ReactDOM.render(<MyApp />, document.querySelector('.container'))