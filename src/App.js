import { Component } from "react";

// create your App component here


export default class App extends Component {
  render(){

  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
  }
}