import React from "react";
import DishdetailComponent from "./DishdetailComponent";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardImgOverlay
} from "react-bootstrap";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedDish: null };
  }
  onDishSelect() {}
  render() {
    const menu = this.state.dishses.map((dish) => {
      return (
        <div className="col-sm-12 col-md-6 m-1">
          <Card>
            <Card.Img />
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <DishdetailComponent />
        </div>
      </div>
    );
  }
}
