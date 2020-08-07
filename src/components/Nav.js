import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggle: false
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({
			toggle: !this.state.toggle
		});

		if (this.state.toggle) {
			document.body.style.overflowY = 'scroll';
		} else {
			document.body.style.overflowY = 'hidden';
		}
	}

	render() {
		return (
			<div className="nav-wrapper">
				<button className="nav-button" onClick={this.toggleMenu}>
					<i className="fa fa-bars fa-3x" />
				</button>
				{this.state.toggle ? (
					<div className="dropdown">
						<ul>
							<li>
								<Link to={'/'} className="home_link" onClick={this.toggleMenu}>
									Home
								</Link>
							</li>
							<li>
								<Link to={'/about'} className="about_link" onClick={this.toggleMenu}>
									About
								</Link>
							</li>
							<li>
								<Link to={'/projects'} className="projects_link" onClick={this.toggleMenu}>
									Projects
								</Link>
							</li>
							<li>
								<Link to={'/contact'} className="contact_link" onClick={this.toggleMenu}>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				) : null}
			</div>
		);
	}
}

export default Nav;
