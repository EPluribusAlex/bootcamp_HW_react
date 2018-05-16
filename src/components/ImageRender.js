import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class ImageRender extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dragonArr: []
		};
		this.shuffle = this.shuffle.bind(this);
	}

	componentDidMount() {
		this.shuffle();
		console.log(this.state.dragonArr, "svg state array");
	}

	shuffle() {
		const 
			preArr = [],
			postArr = [];
		for (let property in this.props.dragons) {
			preArr.push(this.props.dragons[property]);
		}
		console.log(preArr, "pre array");
		while (preArr.length !== 0) {
			const n = Math.floor(Math.random() * preArr.length);
			const item = preArr.splice((n - 1), 1);
			postArr.push(item);
		}
		console.log(postArr, "post array");
		this.setState({
			dragonArr: postArr
		});
	}

	render() {
		return (
			<div>
				<Row>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[0]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[1]} />
					</Col>
					<Col lg="2">	
						<img className="img-responsive" src={this.state.dragonArr[2]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[3]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[4]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[5]} />
					</Col>
				</Row>
				<Row>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[6]} />		
					</Col>	
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[7]} />	
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[8]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[9]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[10]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[11]} />
					</Col>
				</Row>
				<Row>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[12]} />			
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[13]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[14]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[15]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[16]} />
					</Col>
					<Col lg="2">
						<img className="img-responsive" src={this.state.dragonArr[17]} />
					</Col>
				</Row>
			</div>
		);
	}

}

export default ImageRender;