import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import NavComponent from "./components/NavComponent";
import ImageRender from "./components/ImageRender";
import GameModal from "./components/GameModal";
import { default as dragons } from "./assets/svg/dragons";

class App extends Component {

  constructor() {
    super();
    this.state = {
      dragonArr: [],
      score: 0,
      dragonClicks: [],
      modal: false,
      gameState: ""
    };
    this.shuffle = this.shuffle.bind(this);
    this.dragonClick = this.dragonClick.bind(this);
    this.loseState = this.loseState.bind(this);
    this.toggle = this.toggle.bind(this);
    this.winState = this.winState.bind(this);
  }

  shuffle() {
    const 
      preArr = [],
      postArr = [];
    for (let property in dragons) {
      preArr.push(dragons[property]);
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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  dragonClick(e) {
    this.shuffle();
    const item = e.target.getAttribute("src");
    if (this.state.dragonClicks.includes(item)) {
      this.loseState();
    } else {
      this.state.dragonClicks.push(item);
      this.setState({ score: this.state.score + 1 });
      if (this.state.score === 17) {
        this.winState();
      }
    }
    console.log(this.state);
  }

  winState() {
    this.setState({
      score: 0,
      gameState: "Good Job!",
      dragonClicks: []
    })
    this.toggle();
  }

  loseState() {
    this.setState({ 
      score: 0,
      gameState: "Try Again!",
      dragonClicks: [] 
    });
    this.toggle();
  }

  render() {
    return (
      <Container className="wrapper">
          <NavComponent score={this.state.score} />
          <ImageRender dragonClick={this.dragonClick} dragons={this.state.dragonArr} shuffle={this.shuffle} />
          <GameModal toggle={this.toggle} shuffle={this.shuffle} gameState={this.state.gameState} modalState={this.state.modal} />
      </Container>
    );
  }

}

export default App;
