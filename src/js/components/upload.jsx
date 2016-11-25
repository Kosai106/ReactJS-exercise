import React from 'react';

import Navigation from './navigation';
import Sidebar from './sidebar';
import Subnav from './subnav';

import './../../scss/application.scss';
import './../../scss/components/upload.scss';

export default class Upload extends React.Component {
	constructor(props) {
		super(props);
		this.toggleGrid = this.toggleGrid.bind(this);
		this.state = {
			grid: false,
		};
	}

	toggleGrid() {
		this.setState({
			grid: !this.state.grid,
		});
	}

	render() {
		return (
			<div>
				<nav>
					<Navigation />
				</nav>

				<main>
					<Sidebar />
					<div className="columns small-9 main">
						<Subnav toggle={this.state.grid} handleGrid={this.toggleGrid} />
						<div className="row chamber--top upload">
							<div className="columns small-12">
								<form>
									<div className="row">
										<div className="columns small-6">
											<label htmlFor="title">Title</label>
											<input name="title" />
										</div>

										<div className="columns small-6">
											<label htmlFor="url">URL</label>
											<input name="url" />
										</div>

										<div className="columns small-12">
											<label htmlFor="description">Description</label>
											<textarea name="description" rows="4" />

											<label htmlFor="image">Image</label>
											<input name="image" accept="image/*" type="file" />
										</div>

										<div className="columns small-6">
											<label htmlFor="category">Category</label>
											<select name="category">
												<option value="design">Design</option>
												<option value="application">Application</option>
												<option value="typography">Typography</option>
											</select>
										</div>

										<div className="columns small-6">
											<label htmlFor="tags">Tags</label>
											<input name="tags" />
										</div>

										<div className="columns small-12">
											<button className="cta float--right" type="submit">Submit</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}
