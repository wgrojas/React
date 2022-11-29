import React from 'react';
import ReactDOM from 'react-dom/client';
import Model from './Model'
import Color from './Color'

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          <Color
            color= {this.state.color}
          />
          <Model 
            model = {this.state.model}
          />
          <Model 
            model = "texto"
          />
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

export default Car
