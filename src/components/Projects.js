import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

const Thumbnail = function({ project, toggleModal }) {
	const { display_name, name, giph, tech, link, github } = project;
	return (
		<div className="project-thumbnail-container">
			<div className="project-description">
				<img src={giph} className="project" />
				<h3>{display_name}</h3>
				<ul>{tech.map((techName) => <li key={techName}>{techName}</li>)}</ul>
				<div className="project-buttons">
					<a href={link} target="_blank">
						Visit website
					</a>
					<a href={github} target="_blank">
						View code
					</a>
					<a href="#" onClick={() => toggleModal(name)}>
						About
					</a>
				</div>
			</div>
		</div>
	);
};

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			projectInModal: {},
			projects: [
				{
					name: 'pokedex',
					display_name: 'POKÉDEX APP',
					giph: 'https://media.giphy.com/media/QxGq7RjSB1repprhNb/giphy.gif',
					tech: [ 'html', 'css', 'javascript', 'react', 'redux' ],
					link: 'https://pokedex-app-7737f.firebaseapp.com/',
					github: 'https://github.com/jdionisio2113/pokedex'
				},
				{
					name: 'covid',
					display_name: 'COVID-19 Tracker',
					giph: 'https://media.giphy.com/media/JNmu9PA2In0Viz2zTS/giphy.gif',
					tech: [ 'html', 'css', 'javascript', 'react', 'redux' ],
					link: 'https://covid-19-tracker-ac77c.firebaseapp.com/',
					github: 'https://github.com/jdionisio2113/covid-19-tracker'
				},
				{
					name: 'netflix',
					display_name: 'Netflix Clone',
					giph: 'https://media.giphy.com/media/kBq4KVqZ60j7043a3P/giphy.gif',
					tech: [ 'html', 'css', 'javascript', 'react', 'redux' ],
					link: 'https://netflix-clone-52efa.firebaseapp.com/',
					github: 'https://github.com/jdionisio2113/netflix-clone'
				},
				{
					name: 'wikipedia',
					display_name: 'WIKIPEDIA SEARCH',
					giph: 'https://media.giphy.com/media/kBq4KVqZ60j7043a3P/giphy.gif',
					tech: [ 'html', 'css', 'javascript' ],
					link: 'https://jdionisio2113.github.io/Wiki-App/',
					github: 'https://github.com/jdionisio2113/Wiki-App'
				},
				{
					name: 'random_quote_generator',
					display_name: 'RANDOM QUOTE GENERATOR',
					giph: 'https://media.giphy.com/media/iHsrfVfE1YSExqXlDg/giphy.gif',
					tech: [ 'html', 'css', 'javascript' ],
					link: 'https://jdionisio2113.github.io/Random-Quote-Generator/',
					github: 'https://github.com/jdionisio2113/Random-Quote-Generator'
				}
			]
		};

		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal(projectObj) {
		// clear projectObj after closing modal
		const projectInModal = this.state.projects.filter((project) => project.name === projectObj)[0];

		this.setState({
			showModal: !this.state.showModal,
			projectInModal
		});
		console.log(this.state.showModal);
	}

	render() {
		const { projects, projectInModal } = this.state;

		return (
			<div className="project-wrapper">
				<h2>Projects</h2>
				<div className="line" />
				{this.state.showModal === true ? <ProjectModal project={projectInModal} /> : null}
				<div className="project-container">
					{projects.map((project) => (
						<Thumbnail project={project} toggleModal={this.toggleModal} key={project.name} />
					))}
				</div>
			</div>
		);
	}
}

export default Projects;

// class Modal extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			pokemon: {
// 				img: '...',
// 				about: '...'
// 			},
// 			covid: {
// 				img: '...',
// 				about: '...'
// 			},
// 		}
// 	}

// 	render() {
// 		// return
// 	}
// }

// <Modal project='pokemon' />
