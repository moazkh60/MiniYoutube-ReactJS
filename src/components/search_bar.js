import React, {Component} from 'react'

// search bar class component
class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''};
	}
	render(){
		return (
		<div className="search-bar">
		 	<input value = {this.state.term}
		 	 onChange = {event => this.onInputChange(event.target.value)}
		 	 placeholder="Search"/>
		</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar; 