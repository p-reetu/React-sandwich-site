import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React from "react";
import { Navbar } from "react-bootstrap";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES };
  }
  render() {
    return (
      <div className="App">
        <Navbar bg="warning" color="primary">
          <Navbar.Brand href="#home">Restaurante de Sandwich</Navbar.Brand>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
