import React, { Component } from "react";

export default class Test extends Component {
  componentDidMount = () => {
    this.props.getUsers();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div>Redux training</div>
        <hr />
        {this.props.userData &&
          this.props.userData.userData &&
          this.props.userData.userData.map(user => {
            return (
              <div>
                <div>{user.login}</div>
              </div>
            );
          })}
      </div>
    );
  }
}
