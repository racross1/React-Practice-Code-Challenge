import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
const sushPerPage = 4

class App extends Component {

  state = {
    allSushis: [],
    displayIndex: 0, 
    eatenSushis: [],
    tableMoney: 55
  }

  componentDidMount() {
    this.getSushis()
  }
  getSushis = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(allSushis => {
      this.setState({allSushis: allSushis})
      this.displaySushi()})
  }

  sushiCounter = () => {
    if (this.state.displayIndex + sushPerPage === this.state.allSushis.length) {
      this.setState({
        displayIndex: 0
      })
    } else {
    this.setState({
      displayIndex: this.state.displayIndex + sushPerPage,
    })}
    this.displaySushi()
  }
  displaySushi = () => {
    let allSush = this.state.allSushis
    let start = this.state.displayIndex
    let end = start + 4
    return allSush.slice(start,end)
    }

  eatSushi = (sushi) => {
    let newEatenSushis = [...this.state.eatenSushis, sushi]
    let updatedBalance = this.state.tableMoney - sushi.price
    if (updatedBalance < 0) {
      console.log("You can't afford this sushi!")
    } else {
    this.setState({
      eatenSushis: newEatenSushis,
      tableMoney: updatedBalance
    })}
  }

  render() {
    console.log(this.state.displayIndex)
    return (
      <div className="app">
        <SushiContainer sushis={this.displaySushi()} eatenSushis={this.state.eatenSushis} sushiCounter={this.sushiCounter} eatSushi={this.eatSushi}/>
        <Table eatenSushis={this.state.eatenSushis} tableMoney={this.state.tableMoney}/>
      </div>
    );
  }
}

export default App;