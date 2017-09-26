import React, { Component } from 'react';
import '../styles/App.css';
import MenuListItem from './MenuListItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }

  componentDidMount(){
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({
        appetizers: data[0].Appetizers,
        entrees: data[0].Entrees,
        desserts: data[0].Desserts
      })
    })
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="App">
        <MenuListItem
          appetizers={this.state.appetizers}
          entrees={this.state.entrees}
          desserts={this.state.desserts}
        />
      </div>
    );
  }
}

export default App;
