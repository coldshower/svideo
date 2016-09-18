const React = require('react');
const ShowCard = require('./showcard');
const Header = require('./header');
const { object, string } = React.PropTypes;
const { connector } = require('./store');


class Search extends React.Component {
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="container">
				<Header showSearch />
				<div className="shows">
					{this.props.route.shows
					.filter(show => {
						const searchTerm = this.props.searchTerm.toUpperCase();
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
	route: object,
	searchTerm: string
};

module.exports = connector(Search);