import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class ImageRender extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.shuffle();
		console.log(this.props.dragons, "svg state array");
	}

	render() {
		return (
			<Row className="top_nav">
				<Col>
					<Row>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[0]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[1]} />
						</Col>
						<Col lg="2">	
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[2]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[3]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[4]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[5]} />
						</Col>
					</Row>
					<Row>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[6]} />		
						</Col>	
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[7]} />	
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[8]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[9]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[10]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[11]} />
						</Col>
					</Row>
					<Row>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[12]} />			
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[13]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[14]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[15]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[16]} />
						</Col>
						<Col lg="2">
							<img className="img-responsive" onClick={this.props.dragonClick} alt="dragonImage" src={this.props.dragons[17]} />
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}

}

export default ImageRender;