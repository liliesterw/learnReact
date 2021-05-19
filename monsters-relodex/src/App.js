import React, { Component } from 'react';
import {CardList} from './Components/card-list/card-list.component'
import './App.css';

class App extends Component{
  constructor(){
    super();

    // declare a state
    this.state = {
      monsters:[]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
      <CardList monsters= {this.state.monsters}> </CardList>
      
      </div>
    );
  }
}

export default App;
