const { expect } = require('chai');
const React = require('react');
const Search = require('../js/search');
const ShowCard = require('../js/showcard');
const { shallow } = require('enzyme');
const { shows } = require('../public/data');

describe('<Search />', () => {
	it('should render the brand', () => {
		const wrapper = shallow(<Search/>);
		expect(wrapper.contains(<h1 className="brand">svideo</h1>)).to.be.true;
	});

	it('should render as many shows as they are data for', () => {
		const wrapper = shallow(<Search/>);
		
		expect(wrapper.find(ShowCard).length).to.equal(shows.length);
	});
});
