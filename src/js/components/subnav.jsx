import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

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

class Subnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section className="top">
        <div className="columns small-2">
          <Select
            name="date-field"
            value={this.state.dateSelection}
            placeholder="Date"
            options={dateOptions}
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
            clearable={false}
            searchable={false}
          />
        </div>
        <div className="columns small-2">
          <Select
            name="rating-field"
            value={this.state.ratingSelection}
            placeholder="Rating"
            options={ratingOptions}
            clearable={false}
            searchable={false}
          />
        </div>
        <div className="columns small-4">
          <span className="layout float--right">
            <i className="fa fa-th push--right" />
            <i className="fa fa-bars" />
          </span>
        </div>
      </section>
    );
  }
}

export default Subnav;
