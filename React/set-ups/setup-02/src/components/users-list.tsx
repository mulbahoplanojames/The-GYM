import React, { Component } from "react";

export default class UserList extends Component {
  render() {
    const list = [10, 30, 45, 12, 24];
    list.map((li) => console.log(li * 2));
    return <div>UserList</div>;
  }
}
