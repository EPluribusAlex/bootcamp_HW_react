import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

class GameModal extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			  <Modal isOpen={this.props.modalState} toggle={this.props.toggle} className={this.props.className}>
			    <ModalBody>
			      <h2>{this.props.gameState}</h2>
			    </ModalBody>
			    <ModalFooter>
			      <Button color="secondary" onClick={this.props.toggle}>Okay</Button>
			    </ModalFooter>
			  </Modal>
			</div>
		)
	}

}

export default GameModal;