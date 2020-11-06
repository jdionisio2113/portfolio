import React, { Component } from 'react';

class ProjectModal extends Component {
	constructor(props) {
		super(props);

		this.modal = this.modal.bind(this);
	}

	modal() {
		const { project } = this.props;
		console.log(project);
		return (
			<div className="modal-overlay">
				<div className="modal">
					{/* <i className="fas fa-times" onClick={this.toggleModal} /> */}
					<h1>{project.display_name}</h1>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.modal()}</div>;
	}
}

export default ProjectModal;
