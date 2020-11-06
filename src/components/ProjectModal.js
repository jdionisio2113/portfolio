import React, { Component } from 'react';
// import pokedexscr2 from '../img/pokedexscr2';

class ProjectModal extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		modal: true
	// 	};

	// 	this.toggleModal = this.toggleModal.bind(this);
	// 	// this.TrailersDisplay = this.TrailersDisplay.bind(this);
	// }

	constructor(props) {
		super(props);

		// this.state = {
		// 	pokemon: {
		// 		// img: pokedexscr2,
		// 		about: 'pokedexabout'
		// 	},
		// 	covid: {
		// 		img: '...',
		// 		about: '...'
		// 	}
		// };

		this.modal = this.modal.bind(this);
		// this.toggleModal = this.toggleModal.bind(this);
	}

	// toggleModal() {
	// 	this.setState({
	// 		showModal: !this.state.showModal
	// 	});
	// 	console.log(this.state.showModal);
	// }

	modal(props) {
		const { project } = this.props;
		console.warn(project);
		return (
			<div className="modal-overlay">
				<div className="modal">
					{/* <i className="fas fa-times" onClick={this.toggleModal} /> */}
					{/* <h1>{this.state.pokemon.about}</h1> */}
				</div>
			</div>
		);
	}

	// toggleModal() {
	// 	this.setState({
	// 		modal: !this.state.modal
	// 	});
	// }

	// render() {
	// 	return (
	// 		<Modal isOpen={this.state.modal} toggle={this.toggle}>
	// 			<ModalHeader toggle={this.toggle}>About</ModalHeader>
	// 			<ModalBody>
	// 				{/* <img></img> */}
	// 				<p>asdf</p>
	// 				<p>asdf</p>
	// 			</ModalBody>
	// 		</Modal>
	// 	);
	// }

	render() {
		return (
			// <div>hello</div>
			// <div className="modal-overlay">
			// 	<div className="modal">
			// 		<i className="fas fa-times" onClick={this.toggleModal} />
			// 		<h1>{this.state.pokemon.about}</h1>

			// 	</div>
			// </div>
			<div>{this.modal()}</div>
		);
	}
}

export default ProjectModal;
