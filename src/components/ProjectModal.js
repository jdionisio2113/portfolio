import React, { Component } from 'react';

function ProjectModal({ toggleModal, project }) {
	return (
		<div className="modal-overlay">
			<div className="modal">
				<i className="fas fa-times" onClick={() => toggleModal()} />
				<h1>{project.display_name}</h1>
				<img src={project.image} className="project-screenshot" />
				<p className="project-modal-description">{project.description}</p>
			</div>
		</div>
	);
}

export default ProjectModal;
