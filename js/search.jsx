const React = require('react');
const ShowCard = require('./showcard');
const { arrayOf, object } = React.PropTypes;

class Search extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			searchTerm: ''
		}
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}
	handleSearchTermChange (event) {
		this.setState({ searchTerm: event.target.value });
	}
	render () {
		return (
			<div className="container">
				<header className="header">
					<h1 className="brand">svideo</h1>
					<input className="search-input" type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
				</header>
				<div className="shows">
					{this.props.shows
					.filter(show => {
						const searchTerm = this.state.searchTerm.toUpperCase();
						return (show.title + show.description).toUpperCase().indexOf(searchTerm) > -1;
					})
					.map(show => (
						<ShowCard {...show} key={show.imdbID}/>
					))}
				</div>
			</div>
		);
	}
}

Search.propTypes = {
	shows: arrayOf(object)
};

module.exports = Search;