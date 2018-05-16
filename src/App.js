import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import NavComponent from "./components/NavComponent";
import ImageRender from "./components/ImageRender";
import { default as dragons } from "./assets/svg/dragons";

class App extends Component {

  constructor() {
    super();
    this.state = {
      score: 0,
      dragonClicks: {
        clicked: [],
        notClicked: []
      }
    };
  }

  componentDidMount() {
    const arr = [];
    for(let property in dragons) {
      if(dragons.hasOwnProperty(property)) {
        arr.push(property);
      }
    }
    this.setState({
      dragonclicks: {
        clicked: [],
        notClicked: arr 
      }
    });
  }

  render() {
    return (
      <Container className="wrapper">
          <NavComponent score={this.state.score} />
          <ImageRender dragons={dragons} />
      </Container>
    );
  }

}

export default App;
