import React from 'react';
import { Link } from 'react-router';

export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
		};
	}
	toggleActive() {
		this.setState({
			active: !this.state.liked,
		});
	}

	render() {
		return (
			<div>
				<div className={this.props.style} data-toggle="example-dropdown" type="button">
					<span className="chamber-triple--left">{this.props.username}</span>
					<img className="avatar" src={this.props.image} role="presentation" />
				</div>
				<ul className="dropdown-pane menu vertical" data-close-on-click="true" data-dropdown="" id="example-dropdown">
					<li>
						<Link to="/user/profile" className="menu">Profile</Link>
					</li>
					<li>
						<Link to="/user/settings" className="menu">Settings</Link>
					</li>
					<li>
						<Link to="/user/signout" className="menu">Profile</Link>
					</li>
				</ul>
			</div>
		);
	}
}

Dropdown.propTypes = {
	username: React.PropTypes.string,
	image: React.PropTypes.string,
	style: React.PropTypes.string,
};
