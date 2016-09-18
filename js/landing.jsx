const React = require('react');

const { Link } = require('react-router');
const { connector } = require('./store');
const { hashHistory } = require('react-router');

class Landing extends React.Component {
	constructor (props) {
		super(props);
		this.handleSearchTerm = this.handleSearchTerm.bind(this);
		this.gotoSearch = this.gotoSearch.bind(this);
	}
	handleSearchTerm (event) {
		this.props.setSearchTerm(event.target.value);
	}
	gotoSearch (event) {
		hashHistory.push('search');
		event.preventDefault();
	}	
	render () {
		return (
			<div className="home-info">
				<h1 className="title">svideo</h1>
				<form onSubmit={this.gotoSearch}>
					<input 
						className="search" 
						type="text" 
						placeholder="Search" 
						value={this.props.searchTerm} 
						onChange={this.handleSearchTerm}/>
				</form>
				<Link to="/search" className="browse-all">or Browse All</Link>
			</div>
		)
	}
	
}


const { string, func } = React.PropTypes;

Landing.propTypes = {
	searchTerm: string,
	setSearchTerm: func
}

module.exports = connector(Landing);

