import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';

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
						<ProjectCard project={project} toggleModal={this.toggleModal} key={project.name} />
					))}
				</div>
			</div>
		);
	}
}

export default Projects;
