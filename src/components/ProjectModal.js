import React, { Component } from 'react';

function ProjectModal({ toggleModal, project }) {
	return (
		<div className="modal-overlay">
			<div className="modal">
				<i className="fas fa-times" onClick={() => toggleModal()} />
				<h1>{project.display_name}</h1>
			</div>
		</div>
	);
}

export default ProjectModal;
