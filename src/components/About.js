import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
    this.state = {};
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("parent render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react web series</h2>
        <UserClass name={"First"} location={"Kolkata"} />
        {/* <User name={"First"} /> */}
      </div>
    );
  }
}

export default About;
