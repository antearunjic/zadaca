import React, { Component } from "react";

export class ClassComponent extends Component {
  render() {
    return (
      <>
       <h1>Klasna komponenta</h1>
        <p>{this.props.drugiIspis}</p>
      </>
    );
  }
}

export default ClassComponent;
