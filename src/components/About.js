import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react web series</h2>
        <UserClass name={"Sandeep (Class)"} location={"Kolkata"} />
      </div>
    );
  }
}

export default About;
