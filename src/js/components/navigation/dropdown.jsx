import React from 'react';

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
					<img className="avatar" src="https://pbs.twimg.com/profile_images/764956033177546758/KurPHCpC_400x400.jpg" role="presentation" />
				</div>
				<ul className="dropdown-pane menu vertical" data-close-on-click="true" data-dropdown="" id="example-dropdown">
					<li>
						<a className="menu" href="#zzz">
							<i className="fa fa-user" />
              Profile
						</a>
					</li>
					<li>
						<a className="menu" href="#zzz">
							<i className="fa fa-cog" />
							Settings
						</a>
					</li>
					<li>
						<a className="menu" href="#zzz">
							<i className="fa fa-sign-out" />
							Logout
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

Dropdown.propTypes = {
	username: React.PropTypes.string,
	style: React.PropTypes.string,
};
