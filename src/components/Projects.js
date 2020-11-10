import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';
import pokedeximg1 from '../img/pokedexscr1.png';
import covid_screenshot from '../img/covid-screenshot.png';
import netflix_screenshot from '../img/netflix-screenshot.png';
import wikipedia_screenshot from '../img/wikipedia-screenshot.png';
import random_quote_screenshot from '../img/random-quote-generator.png';

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
					github: 'https://github.com/jdionisio2113/pokedex',
					image: pokedeximg1,
					description:
						'A pokedex app that gives a list of pokemon that you can browse through and learn about from a brief overview involving their type, base stats, and evolution set.'
				},
				{
					name: 'covid',
					display_name: 'COVID-19 TRACKER',
					giph: 'https://media.giphy.com/media/JNmu9PA2In0Viz2zTS/giphy.gif',
					tech: [ 'html', 'css', 'javascript', 'react', 'redux' ],
					link: 'https://covid-19-tracker-ac77c.firebaseapp.com/',
					github: 'https://github.com/jdionisio2113/covid-19-tracker',
					image: covid_screenshot,
					description:
						'An app that tracks COVID-19 related information that is updated daily. A line graph will display as default information for global results and a user can search for a country that will display a bar graph involving current information regarding infected, recoveries, and deaths.'
				},
				{
					name: 'netflix',
					display_name: 'NETFLIX CLONE',
					giph: 'https://media.giphy.com/media/kBq4KVqZ60j7043a3P/giphy.gif',
					tech: [ 'html', 'sass', 'javascript', 'react', 'redux' ],
					link: 'https://netflix-clone-52efa.firebaseapp.com/',
					github: 'https://github.com/jdionisio2113/netflix-clone',
					image: netflix_screenshot,
					description:
						'A netflix clone where users can browse through categorized TV shows and search for their favorite ones. Trailers and brief descriptions are available as they go through shows.'
				},
				{
					name: 'wikipedia',
					display_name: 'WIKIPEDIA SEARCH',
					giph: 'https://media.giphy.com/media/YonSHTvmeGyEDtOd1p/giphy.gif',
					tech: [ 'html', 'css', 'javascript' ],
					link: 'https://jdionisio2113.github.io/Wiki-App/',
					github: 'https://github.com/jdionisio2113/Wiki-App',
					image: wikipedia_screenshot,
					description:
						'A wikepedia clone and allows users to search and is given links as results that leads them to the real wikipedia website for information.'
				},
				{
					name: 'random_quote_generator',
					display_name: 'RANDOM QUOTE GENERATOR',
					giph: 'https://media.giphy.com/media/iHsrfVfE1YSExqXlDg/giphy.gif',
					tech: [ 'html', 'css', 'javascript' ],
					link: 'https://jdionisio2113.github.io/Random-Quote-Generator/',
					github: 'https://github.com/jdionisio2113/Random-Quote-Generator',
					image: random_quote_screenshot,
					description:
						'A random quote generator that displays a random quote to the user every time they press the next button and has the ability to tweet the quote with the twitter logo button.'
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
	}

	render() {
		const { projects, projectInModal, showModal } = this.state;

		return (
			<div className="project-wrapper">
				<h2>Projects</h2>
				<div className="line" />
				{showModal === true ? <ProjectModal project={projectInModal} toggleModal={this.toggleModal} /> : null}
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
