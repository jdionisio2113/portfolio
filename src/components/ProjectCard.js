import React from 'react';

const ProjectCard = function({ project, toggleModal }) {
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

export default ProjectCard;
