import React from "react";

export default class DishdetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }
  onDishSelect(dish) {
    this.setState = { selectedDish: dish };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 m-1"></div>
          <div className="col-sm-12 m-1"></div>
        </div>
      </div>
    );
  }
}
