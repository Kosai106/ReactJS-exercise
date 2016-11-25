import React from 'react';
import Select from 'react-select';
import { filter } from 'lodash';

import 'react-select/dist/react-select.css';
import './../../scss/components/subnav.scss';

const dateOptions = [
  { value: 'one', label: 'Last week' },
  { value: 'two', label: 'Lat month' },
  { value: 'three', label: 'Last year' },
  { value: 'four', label: 'All time' },
];

const categoryOptions = [
  { value: 'one', label: 'Mockup' },
  { value: 'two', label: 'Design' },
  { value: 'three', label: 'Brand' },
  { value: 'Four', label: 'Colours' },
  { value: 'Five', label: 'Application' },
];

const popularityOptions = [
  { value: 'one', label: 'Latest' },
  { value: 'two', label: 'Oldest' },
  { value: 'three', label: 'Favourites' },
];

const ratingOptions = [
  { value: 'one', label: '1 star' },
  { value: 'two', label: '2 stars' },
  { value: 'three', label: '3 stars' },
  { value: 'four', label: '4 stars' },
  { value: 'five', label: '5 stars' },
];

export default class Subnav extends React.Component {
	constructor(props) {
		super(props);
		this.logChangeCategory = this.logChangeCategory.bind(this);
		this.logChangeRating = this.logChangeRating.bind(this);
		this.logChangeDate = this.logChangeDate.bind(this);
		this.logChangePopularity = this.logChangePopularity.bind(this);
		this.state = {
			categorySelection: '',
			ratingSelection: '',
			dateSelection: '',
			popularitySelection: '',
		};
	}

	logChangeCategory(val) {
		this.setState({ categorySelection: val });
	}
	logChangeRating(val) {
		this.setState({ ratingSelection: val });
	}
	logChangeDate(val) {
		this.setState({ dateSelection: val });
	}
	logChangePopularity(val) {
		this.setState({ popularitySelection: val });
	}

	filterPeople() {
		let search = this.props.content;
		if (this.state.categorySelection) {
			search = filter(search, (ppl) => {
				return ppl.countries.indexOf(this.state.categorySelection) !== -1;
			});
		}
		if (this.state.ratingSelection) {
			search = filter(search, (ppl) => {
				return ppl.departments.indexOf(this.state.ratingSelection) !== -1;
			});
		}
		return search;
	}

	render() {
		return (
			<section className="subnav">
				<div className="columns small-2">
					<Select
            name="date-field"
            value={this.state.dateSelection}
            placeholder="Date"
            options={dateOptions}
						onChange={this.logChangeDate}
            clearable={true}
            searchable={false}
					/>
				</div>
				<div className="columns small-2">
					<Select
            name="category-field"
            value={this.state.categorySelection}
            placeholder="Category"
            options={categoryOptions}
						onChange={this.logChangeCategory}
            clearable={true}
            searchable={false}
					/>
				</div>
				<div className="columns small-2">
					<Select
						name="popularity-field"
            value={this.state.popularitySelection}
            placeholder="Sorting"
            options={popularityOptions}
						onChange={this.logChangePopularity}
            clearable={true}
            searchable={false}
					/>
				</div>
				<div className="columns small-2">
					<Select
            name="rating-field"
            value={this.state.ratingSelection}
            placeholder="Rating"
            options={ratingOptions}
						onChange={this.logChangeRating}
            clearable={true}
            searchable={false}
					/>
				</div>
				<div className="columns small-4">
					<span className="layout float--right">
						{	this.props.toggle ? (<div className="btn btn--absolute btn--primary chamber--right" onClick={this.props.handleGrid}><img src="./img/grid.svg" role="presentation" /></div>)
																: (<div className="btn btn--absolute btn--primary chamber--right" onClick={this.props.handleGrid}><img src="./img/list.svg" role="presentation" /></div>)
						}
					</span>
				</div>
			</section>
		);
	}
}

Subnav.propTypes = {
	toggle: React.PropTypes.bool,
	handleGrid: React.PropTypes.func,
	content: React.PropTypes.array.isRequired,
};
